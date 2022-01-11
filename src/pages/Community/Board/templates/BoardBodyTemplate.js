import React from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

@inject('communityStore')
@observer
class BoardBodyTemplate extends React.Component {
  render() {
    const communityStore = this.props.communityStore;
    const curPage = communityStore.data.pagination.curPage;
    const postList = communityStore.data.post.list.data;
    const postCount = communityStore.data.post.list.count;
    const rows = [];

    postList.forEach(data => {
      const postId = data.postId;
      rows.push(
        <tr>
          <td>{data.postSequence}</td>
          <td><Link to={`/board/postView?postId=${postId}&curPage=${curPage}`}>{data.title}</Link></td>
          <td>{data.nickname}</td>
          <td>{data.writeDate}</td>
          <td>{data.readCount}</td>
          <td>{data.likeCount}</td>
        </tr>
      )
    });
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>조회</th>
              <th>좋아요</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        <button onClick={() => communityStore.handlePostWriteClick()}>글쓰기</button>
      </div>
    )
  }
}

export default BoardBodyTemplate;