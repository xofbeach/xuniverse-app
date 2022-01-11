import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('communityStore')
@observer
class PostViewWriteReplyTemplate extends React.Component {
  handleChangeInputFile(e) {
    this.props.communityStore.handleChangeInputFile(e.target.files[0])
    e.target.value = null;
  }

  render() {
    const communityStore = this.props.communityStore;
    return (
      <div>
        <fieldset>
          <legend>댓글을 남겨보세요.</legend>
          <textarea
            value={communityStore.data.reply.write.content}
            onChange={(e) => communityStore.handleReplyContentChange(e.target.value)}>
          </textarea>
          <input type="file" onChange={(e) => this.handleChangeInputFile(e)} id="replyImageUpload" style={{display:'none'}}/>
          <label for="replyImageUpload" class="button-style">💾</label>
          <img src={communityStore.data.reply.write.image.resizedImage}></img>
          <button onClick={() => communityStore.handleReplyRegisterClick()}>등록</button>
        </fieldset>
      </div>
    )
  }
}

export default PostViewWriteReplyTemplate;