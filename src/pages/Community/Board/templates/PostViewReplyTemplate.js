import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('communityStore')
@observer
class PostViewReplyTemplate extends React.Component {
  handleReReplyAndModifyChangeInputFile(e) {
    this.props.communityStore.handleReReplyAndModifyChangeInputFile(e.target.files[0])
    e.target.value = null;
  }

  render() {
    const communityStore = this.props.communityStore;
    const replyList = communityStore.data.reply.list.data;
    const rows = [];
    replyList.forEach(data => {
      const postId = data.postId;
      const upperReplyId = data.upperReplyId;
      const hasUpperSpace = upperReplyId === undefined ? '': '　　　';
      const upperWriterNickname = data.upperWriterNickname;
      const bundleId = data.bundleId;
      const replyId = data.replyId;
      if (data.remark && (data.remark === 'INSERT_HERE' || data.remark === 'MODIFY_HERE')) {
        rows.push(
          <div>
            <fieldset>
              <textarea
                value={communityStore.data.reply.reReplyAndModify.content}
                onChange={(e) => communityStore.handleReReplyAndModifyContentChange(e.target.value)}>
              </textarea>
              <input type="file" onChange={(e) => this.handleReReplyAndModifyChangeInputFile(e)} id="replyImageUpload" style={{display:'none'}}/>
              <label for="replyImageUpload" class="button-style">📷</label>
              <img src={communityStore.data.reply.reReplyAndModify.image.resizedImage}></img>
              <label class="button-style" onClick={() => communityStore.handleReReplyAndModifyWriteImageDeleteClick()}>✂</label>
              <button onClick={() => communityStore.handleReReplyAndModifyWriteCancelClick()}>취소</button>
              <button onClick={() => communityStore.handleReReplyAndModifyWriteRegisterClick(replyId, bundleId, upperReplyId)}>등록</button>
            </fieldset>
          </div>
        )
      } else {
        rows.push(
          <div>
            <p>{hasUpperSpace}{data.nickname}</p>
            <pre>{hasUpperSpace}{upperWriterNickname === undefined ? '' : <strong>{upperWriterNickname} </strong>}{data.content}</pre>
            {data.resizedImage ? <p>{hasUpperSpace}<img src={data.resizedImage}></img></p> : null}
            <p>
              {hasUpperSpace}{data.writeDate}　
              <button onClick={() => communityStore.handleReReplyModifyClick(replyId)}>수정</button>
              <button onClick={() => communityStore.handleReReplyDeleteClick(replyId)}>삭제</button>
              <button onClick={() => communityStore.handleReReplyWriteClick(replyId, bundleId)}>답글쓰기</button>
            </p>
            <hr/>
          </div>
        )
      }
    });
    return (
      <div>
        {rows}
      </div>
    )
  }
}

export default PostViewReplyTemplate;