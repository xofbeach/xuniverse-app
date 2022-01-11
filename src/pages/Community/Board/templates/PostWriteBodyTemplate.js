import React from 'react';
import ReactQuill from 'react-quill';
import Dropzone from 'react-dropzone';

import { htmlImage } from 'utils/dataUtil.js';
import { inject, observer } from 'mobx-react';
import "react-quill/dist/quill.snow.css";
import "css/quill_style.css";
const __ISMSIE__ = navigator.userAgent.match(/Trident/i) ? true : false;
const __ISIOS__ = navigator.userAgent.match(/iPad|iPhone|iPod/i) ? true : false;

@inject('communityStore')
@observer
class PostViewBodyTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quillRef : null,
      dropzone : null,
      onKeyEvent : false,
      subject: "",
      contents: __ISMSIE__ ? "<p>&nbsp;</p>" : "",
      workings: {},
      fileIds: []
    };
  }

  saveFile = (file) => {
    console.log("file", file);

    const nowDate = new Date().getTime();
    const workings = { ...this.state.workings, [nowDate]: true };
    this.setState({ workings });

    return this.props.communityStore.uploadFile([file]).then(
      (results) => {
        const { sizeLargeUrl, objectId } = results[0];

        workings[nowDate] = false;
        this.setState({ workings, fileIds: [...this.state.fileIds, objectId] });
        return Promise.resolve({ url: sizeLargeUrl });
      },
      (error) => {
        console.error("saveFile error:", error);
        workings[nowDate] = false;
        this.setState({ workings });
        return Promise.reject(error);
      }
    );
  };

  onDrop = async (acceptedFiles) => {
    try {
      await acceptedFiles.reduce((pacc, _file, i) => {
        return pacc.then(async () => {
          const { url } = await this.saveFile(_file);
          const temp_url = 'https://i.pinimg.com/originals/15/92/bc/1592bc16af84ca4e1888476132ea49a0.png'
          const quill = this.state.quillRef.getEditor();
          const range = quill.getSelection();
          quill.insertEmbed(range.index, "image", temp_url);
          quill.setSelection(range.index + 1);
          quill.focus();
        });
      }, Promise.resolve());
    } catch (error) {}
  };

  imageHandler = () => {
    if (this.state.dropzone) this.state.dropzone.open();
  };

  modules = {
    toolbar: {
      container: [
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ size: ["small", false, "large", "huge"] }, { color: [] }],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
          { align: [] }
        ],
        ["link", "image", "video"],
        ["clean"]
      ],
      handlers: { image: this.imageHandler }
    },
    clipboard: { matchVisual: false }
  };

  formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "size",
    "color",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "align"
  ];

  onKeyUp = (event) => {
    if (!__ISIOS__) return;
    // enter
    if (event.keyCode === 13) {
      this.onKeyEvent = true;
      this.state.quillRef.blur();
      this.state.quillRef.focus();
      if (document.documentElement.className.indexOf("edit-focus") === -1) {
        document.documentElement.classList.toggle("edit-focus");
      }
      this.onKeyEvent = false;
    }
  };

  onFocus = () => {
    if (!this.onKeyEvent && document.documentElement.className.indexOf("edit-focus") === -1) {
      document.documentElement.classList.toggle("edit-focus");
      window.scrollTo(0, 0);
    }
  };

  onBlur = () => {
    if (!this.onKeyEvent && document.documentElement.className.indexOf("edit-focus") !== -1) {
      document.documentElement.classList.toggle("edit-focus");
    }
  };

  doBlur = () => {
    this.onKeyEvent = false;
    this.state.quillRef.blur();
    // force clean
    if (document.documentElement.className.indexOf("edit-focus") !== -1) {
      document.documentElement.classList.toggle("edit-focus");
    }
  };

  onChangeContents = (contents) => {
    let _contents = null;
    if (__ISMSIE__) {
      if (contents.indexOf("<p><br></p>") > -1) {
        _contents = contents.replace(/<p><br><\/p>/gi, "<p>&nbsp;</p>");
      }
    }
    this.setState({ contents: _contents || contents });
    console.log(contents)
  };

render(){
    const { value, onChange } = this.props;
    return(
      <div className="main-panel">
        <div className="main-content">
          <ReactQuill
            ref={(el) => (this.state.quillRef = el)}
            value={this.state.contents}
            onChange={this.onChangeContents}
            onKeyUp={this.onKeyUp}
            // onFocus={this.onFocus}
            onBlur={this.onBlur}
            theme="snow"
            modules={this.modules}
            formats={this.formats}
          />
          <Dropzone
            ref={(el) => (this.state.dropzone = el)}
            style={{ width: 0, height: 0 }}
            onDrop={this.onDrop}
            accept="image/*"
          />
        </div>
      </div>
    )
}
}

export default PostViewBodyTemplate;