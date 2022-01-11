import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor, Viewer } from '@toast-ui/react-editor';
import { htmlImage } from 'utils/dataUtil.js';
import { inject, observer } from 'mobx-react';

@inject('communityStore')
@observer
class PostViewBodyTemplate extends React.Component {
  editorRef = React.createRef();
  render() {
    const communityStore = this.props.communityStore;
    const writeData = communityStore.data.post.write;
    return (
      <div>
        <table>
          <tr>
            <input
              value={writeData.title}
              onChange={(e) => communityStore.handlePostWriteTitleChange(e.target.value)}
            />
          </tr>
        </table>
        <hr/>
        <Editor
          initialValue={writeData.content}
          // previewStyle="vertical"
          height="600px"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          ref={this.editorRef}
          // onFocus={this.handleFocus}
          onChange={() => communityStore.handlePostWriteContentChange(this.editorRef.current.getInstance().getHtml())}
        />
        {/* <button onClick={this.handleClick}>make bold</button> */}
        {/* <button onClick={this.handleClickGetHtmlButton}>get HTML</button> */}
        <hr/>
      </div>
    )
  }
}

export default PostViewBodyTemplate;