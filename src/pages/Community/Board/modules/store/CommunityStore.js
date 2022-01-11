import { observable, action } from 'mobx';
import * as convUtil from 'utils/convUtil.js';
import communityRepository from 'pages/Community/Board/modules/repository/CommunityRepository';
import { asyncAction } from 'mobx-utils';

export default class CommunityStore {
  @observable 
  data = {
    category : '',
    // postId : null,
    history : null,
    // BoardPagingTemplate : 페이징
    pagination : {
      curPage : 1
    },
    post : {
      postId : null,
      // BoardBodyTemplate : 게시글 목록
      list : {
        data : [],
        count : '',
      },
      // PostViewBodyTemplate : 게시글 조회(1건)
      read : {
        data : {}
      },
      // PostViewBodyTemplate : 게시글 작성
      write : {
        title : null,
        content : null
      }
    },
    reply : {
      // PostViewReplyTemplate : 댓글 목록
      list : {
        data : []
      },
      // PostViewReplyTemplate : 댓글 작성
      write : {
        content : null,
        image : {
          originalImage : null,
          resizedImage : null
        }
      },
      // PostViewReplyTemplate : 대댓글 또는 댓글 수정
      reReplyAndModify : {
        content : null,
        image : {
          originalImage : null,
          resizedImage : null
        }
      }
    }
  }

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @asyncAction
  async* getPostList() {
    const res = yield communityRepository.getPostList({curPage : this.data.pagination.curPage});

    if (res.status === 200) {
      const postList = res.data.postList;
      const postCount = res.data.postCount;
      const pagination = res.data.pagination;
      
      // set store
      this.data = {
        ...this.data,
        post : {
          ...this.data.post,
          list : {
            data : postList,
            count : postCount
          }
        },
        pagination : pagination
      }
    }
  }

  @asyncAction
  async* getPostById() {
    const res = yield communityRepository.getPostById({postId : this.data.post.postId});

    if (res.status === 200) {
      const post = res.data.post;
      const replyList = res.data.replyList;
  
      // set store
      this.data = {
        ...this.data,
        post : {
          ...this.data.post,
          read : post
        },
        reply : {
          ...this.data.reply,
          list : {
            data : replyList
          }
        }
      }
    }
  }

  @action
  handlePageNumberClick(pageNumber) {
    this.data.pagination = {
      ...this.data.pagination,
      curPage : pageNumber
    }
    this.getPostList();
  }

  @action
  handlePostModifyClick(postId) {
    this.data.post.write = this.data.post.read;
    this.data.history.push('/board/postWrite?postId='+this.data.post.postId);
  }

  @asyncAction
  async* handlePostDeleteClick(postId) {
    const res = yield communityRepository.deletePostById({postId : this.data.post.postId});
    if (res.status === 200) {
      this.data.history.push('/board/postList');
    }
  }

  @action
  handlePostListClick(curPage) {
    this.data.history.push('/board/postList?curPage='+curPage);
  }

  @action
  handleReplyContentChange(reply) {
    this.data.reply.write = {
      ...this.data.reply.write,
      content : reply
    }
    console.log(this.data.reply.write.image.resizedImage)
  }

  /**
   * 댓글을 등록합니다.
   * @param 
   * @param 
   * @return 
   */
  @asyncAction
  async* handleReplyRegisterClick() {
    const params = {
      postId : this.data.post.postId, 
      reply : this.data.reply.write.content,
      userId : this.rootStore.loginStore.data.login.userId,
      originalImage : this.data.reply.write.image.originalImage,
      resizedImage : this.data.reply.write.image.resizedImage
    }
    const res = yield communityRepository.registerReply(params);
    if (res.status === 200) {
      this.data.reply.write = {
        content : '',
        image : {
          originalImage : null,
          resizedImage : null
        }
      }
      this.getPostById();
    }
  }

  @action
  handleReReplyWriteClick(replyId, bundleId) {
    let replyList = this.data.reply.list.data;
    let spliceIndex;
    let postId;
    let upperReplyId;

    /**
     * 생성된 대댓글 입력창이 존재할 경우 제거
     */
    replyList.some((data, index) => {
      if (data.remark && data.remark === 'INSERT_HERE') {
        replyList.splice(index, 1);
        return true;
      }
    })
    /**
     * 답글쓰기 대상 다음에 대댓글 입력창 생성
     */
    replyList.forEach((data, index) => {
      if (data.replyId === replyId) {
        spliceIndex = index+1;
      }
    });
    replyList.splice(spliceIndex, 0, {
      postId : this.data.post.postId,
      upperReplyId : replyId,
      bundleId : bundleId, 
      remark : 'INSERT_HERE'
    });
    this.data.reply.list = {
      data : replyList
    }
  }

  @action
  handleReReplyAndModifyContentChange(content){
    this.data.reply.reReplyAndModify = {
      ...this.data.reply.reReplyAndModify,
      content : content
    }
  }

  @action
  handleReReplyAndModifyWriteCancelClick() {
    let replyList = this.data.reply.list.data;

    /**
     * 생성된 대댓글 입력창 또는 수정입력창이 존재할 경우 제거 또는 기존내용 표시
     */
    replyList.some((data, index) => {
      if (data.remark && data.remark === 'MODIFY_HERE') {
        /**
         * MODIFY_HERE
         * edit mode flag (MODIFY_HERE) 제거
         * 기존내용 재 렌더링
         */
        delete data.remark;
        return true;
      } else if (data.remark && data.remark === 'INSERT_HERE') {
        /**
         * INSERT_HERE
         * insert mode 제거
         * 재 렌더링시 해당 인덱스 내용 삭제
         */
        replyList.splice(index, 1);
        return true;
      }
    })

    this.data.reply = {
      ...this.data.reply,
      list : {
        data : replyList
      },
      reReplyAndModify : {
        content : '',
        image : {
          originalImage : null,
          resizedImage : null
        }
      }
    }
  }

  @asyncAction
  async* handleReReplyAndModifyWriteRegisterClick(replyId, bundleId, upperReplyId) {
    if (replyId === undefined) {
      const params = {
        postId : this.data.post.postId,
        bundleId : bundleId,
        upperReplyId : upperReplyId,
        content : this.data.reply.reReplyAndModify.content,
        userId : this.rootStore.loginStore.data.login.userId,
        originalImage : this.data.reply.reReplyAndModify.image.originalImage,
        resizedImage : this.data.reply.reReplyAndModify.image.resizedImage
      }
      const res = yield communityRepository.registerReReply(params);

      if (res.status === 200) {
        this.data.reply.reReplyAndModify = {
          content : '',
          image : {
            originalImage : null,
            resizedImage : null
          }
        };
        this.getPostById();
      }
    } else {
      this.reReplyModify(replyId);
    }
  }

  @action
  handleReReplyModifyClick(replyId) {
    let replyList = this.data.reply.list.data;
    let spliceIndex;
    let targetOriginalData;

    /**
     * 생성된 수정입력창이 존재할 경우 제거
     */
    replyList.some((data, index) => {
      if (data.remark && data.remark === 'MODIFY_HERE') {
        replyList.splice(index, 1);
        return true;
      }
    })
    /**
     * 타겟에 수정입력창 입력창 생성
     */
    replyList.forEach((data, index) => {
      if (data.replyId === replyId) {
        spliceIndex = index;
        targetOriginalData = data;
      }
    });
    replyList.splice(spliceIndex, 1, {
      ...targetOriginalData,
      remark : 'MODIFY_HERE'
    });

    // set store
    this.data.reply = {
      ...this.data.reply,
      list : {
        data : replyList
      },
      reReplyAndModify : {
        ...this.data.reply.reReplyAndModify,
        content : targetOriginalData.content,
        image : {
          resizedImage : targetOriginalData.resizedImage
        }
      }
    }
  }

  @asyncAction
  async* reReplyModify(replyId) {
    const params = {
      replyId : replyId,
      content : this.data.reply.reReplyAndModify.content,
      userId : this.rootStore.loginStore.data.login.userId,
      originalImage : this.data.reply.reReplyAndModify.image.originalImage,
      resizedImage : this.data.reply.reReplyAndModify.image.resizedImage
    }
    const res = yield communityRepository.modifyReReply(params);

    if (res.status === 200) {
      this.data.reply.reReplyAndModify = {
        content : '',
        image : {
          originalImage : null,
          resizedImage : null
        }
      }
      this.getPostById();
    }
  }

  @asyncAction
  async* handleReReplyDeleteClick(replyId) {
    const res = yield communityRepository.deleteReReply({replyId : replyId})
    if (res.status === 200) {
      this.getPostById();
    }
  }

  @action
  handlePostWriteClick() {
    this.data.history.push('/board/postWrite');
  }

  @action
  handlePostWriteContentChange(content) {
    this.data.post.write = {
      ...this.data.post.write,
      content : content
    }
  }
  
  @action
  handlePostWriteTitleChange(title) {
    this.data.post.write = {
      ...this.data.post.write,
      title : title
    }
  }

  @asyncAction
  async* handlePostWriteRegisterClick() {
    const params = {
      title : this.data.post.write.title,
      content : this.data.post.write.content,
      userId : this.rootStore.loginStore.data.login.userId,
      postId : this.data.post.postId
    }
    const res = yield communityRepository.registerPostWrite(params);

    if (res.status === 200) {
      this.data.post.write = {
        title : null,
        content : null
      }
      this.data.history.push('/board/postList');
    }
  }

  @action
  setLocationSearch(postId, curPage, history) {
    /**
     * setLocationSearch
     * 1) this.data.post.postId
     * 2) this.data.pagination.curPage
     * 3) this.data.history
     */
    this.data = {
      ...this.data,
      post :{
        ...this.data.post,
        postId : postId
      },
      pagination : {
        curPage : curPage
      },
      history : history
    }
  }

  @action
  handleChangeInputFile(file) {
    console.log(file)
    const storeImage = this.data.reply.write.image;
    // original
    var reader = new FileReader();
    reader.onload = function(e){
        // document.getElementById('original').src = e.target.result;
        // console.log(e.target.result)
        storeImage.originalImage = e.target.result;
    };
    reader.readAsDataURL(file);
    
    // resizing
    convUtil.resizeImage({
        file: file,
        maxSize: 250
    }).then(function (resizedImage) {
        reader.onload = function(e){
            // document.getElementById('preview').src = resizedImage;
            console.log(e)
            console.log(e.target)
            console.log(e.target.onload.Scopes)
            storeImage.resizedImage = resizedImage;
        };
        reader.readAsDataURL(file);
    });
  }

  @action
  handleReReplyAndModifyChangeInputFile(file) {
    const storeImage = this.data.reply.reReplyAndModify.image;
    // original
    var reader = new FileReader();
    reader.onload = function(e){
        // document.getElementById('original').src = e.target.result;
        storeImage.originalImage = e.target.result;
    };
    reader.readAsDataURL(file);
    
    // resizing
    convUtil.resizeImage({
      file: file,
      maxSize: 250
    })
    .then(function (resizedImage) {
      reader.onload = function(e){
          // document.getElementById('preview').src = resizedImage;
          storeImage.resizedImage = resizedImage;
      };
      reader.readAsDataURL(file);
    });
  }

  @action
  handleReReplyAndModifyWriteImageDeleteClick() {
    this.data.reply.reReplyAndModify.image = {
      originalImage : null,
      resizedImage : null
    }
  }

  @asyncAction
  async* uploadFile(file) {
    console.log('CommunityStore-uploadFile')
    console.log(file)
    const params = {
      file : file,
      userId : 'pprr22'
      // title : this.data.post.write.title,
      // content : this.data.post.write.content,
      // userId : this.rootStore.loginStore.data.login.userId,
      // postId : this.data.post.postId
    }
    const res = yield communityRepository.uploadFile(file);

    if (res.status === 200) {
      return res.data;
    }
  }
}
