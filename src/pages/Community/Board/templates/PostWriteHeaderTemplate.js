import { inject } from 'mobx-react';
import React from 'react';

@inject('communityStore')
class PostWriteHeaderTemplate extends React.Component {
  render() {
    const communityStore = this.props.communityStore;
    
    return (
      <div>
        <div>
          <button onClick={() => communityStore.handlePostWriteRegisterClick()}>등록</button>
        </div>
      </div>
    )
  }
}

export default PostWriteHeaderTemplate;