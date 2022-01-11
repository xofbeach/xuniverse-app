import React from 'react';

class BoardHeaderTemplate extends React.Component {
  render() {
    const postId = this.props.postId;
    return (
      <div>
        {/* <div>
          <button onClick={() => this.props.onModifyClick(postId)}>수정</button>
          <button onClick={() => this.props.onDeleteClick(postId)}>삭제</button>
        </div>
        <div>
          <button>이전글</button>
          <button>다음글</button>
          <button>목록</button>
        </div> */}
      </div>
    )
  }
}

export default BoardHeaderTemplate;