import { inject, observer } from 'mobx-react';
import React from 'react';

@inject('communityStore')
@observer
class BoardPagingTemplate extends React.Component {
  render() {
    const communityStore = this.props.communityStore;

    const pages = [];
    const pagination = communityStore.data.pagination;
    const startPage = pagination.startPage;
    const endPage = pagination.endPage;
    const curPage = pagination.curPage;
    const pageCnt = pagination.pageCnt;
    const prevPage = pagination.prevPage;

    // prev
    if (prevPage !== 0 && prevPage !== undefined) {
      pages.push(
        <button onClick={() => communityStore.handlePageNumberClick(pagination.prevPage)}>←이전</button>
      )
    }
    // pageNumber
    for (let pageNumber=startPage; pageNumber<=endPage; pageNumber++) {
      pages.push(
        pageNumber === curPage 
          ? <button onClick={() => communityStore.handlePageNumberClick(pageNumber)}><strong>[{pageNumber}]</strong></button> 
          : <button onClick={() => communityStore.handlePageNumberClick(pageNumber)}>{pageNumber}</button>
      );
    }
    // next
    if (pageCnt > endPage) {
      pages.push(
        <button onClick={() => communityStore.handlePageNumberClick(pagination.nextPage)}>다음→</button>
      )
    }
    return (
      <div>
        {pages}
      </div>
    )
  }
}

export default BoardPagingTemplate;