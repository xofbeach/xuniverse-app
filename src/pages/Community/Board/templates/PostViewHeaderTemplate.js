import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('communityStore')
@observer
class PostViewHeaderTemplate extends React.Component {
  render() {
    const communityStore = this.props.communityStore;
    const postId = communityStore.data.post.postId;
    const curPage = communityStore.data.pagination.curPage;

    return (
      <div>
        <div>
          <button onClick={() => communityStore.handlePostModifyClick(postId)}>수정</button>
          <button onClick={() => communityStore.handlePostDeleteClick(postId)}>삭제</button>
        </div>
        <div>
          <button>이전글</button>
          <button>다음글</button>
          <button onClick={() => communityStore.handlePostListClick(curPage)}>목록</button>
        </div>
      </div>
    )
  }
}

export default PostViewHeaderTemplate;