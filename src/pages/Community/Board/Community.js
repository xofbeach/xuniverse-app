import React from 'react';
import CommunityContainer from 'pages/Community/Board/CommunityContainer';
import queryString from 'query-string';
import { observer, inject } from 'mobx-react';

@inject('communityStore')
@observer
class Community extends React.Component {
  render() {
    const query = queryString.parse(this.props.location.search);
    const postId = query.postId;
    const curPage = query.curPage === undefined ? 1 : query.curPage;
    const communityStore = this.props.communityStore;

    communityStore.setLocationSearch(postId, curPage, this.props.history)
    return (
      <div>
        <CommunityContainer/>
      </div>
    )
  }
}

export default Community;