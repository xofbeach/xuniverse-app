import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { inject, observer } from 'mobx-react';


@inject('communityStore')
@observer
class PostViewBodyTemplate extends React.Component {
  render() {
    const communityStore = this.props.communityStore;
    const postData = communityStore.data.post.read;
    
    return (
      <div>
        <table>
          <tr>
            <h2>
              <td>{postData.title}</td>
            </h2>
          </tr>
          <tr>
            <td>{postData.nickname}</td>
          </tr>
          <tr>
            <td>{postData.writeDate}</td>
          </tr>
        </table>
        <hr/>
        <table style={{height: '200px'}}>
          <tr>
            {/* <div>{postData.content}</div> */}
            <div dangerouslySetInnerHTML={ {__html: postData.content} }></div>
          </tr>
        </table>
        <hr/>
      </div>
    )
  }
}

export default PostViewBodyTemplate;