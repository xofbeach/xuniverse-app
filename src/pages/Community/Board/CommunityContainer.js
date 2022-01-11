import React, { Fragment } from 'react';
import { inject } from 'mobx-react';

import TopInfomationTemplate from 'common/components/Login/TopInfomationTemplate';

import BoardHeaderTemplate from 'pages/Community/Board/templates/BoardHeaderTemplate';
import BoardBodyTemplate from 'pages/Community/Board/templates/BoardBodyTemplate';
import BoardPagingTemplate from 'pages/Community/Board/templates/BoardPagingTemplate';
import BoardSearchOptionTemplate from 'pages/Community/Board/templates/BoardSearchOptionTemplate';
import BoardAdsTemplate from 'pages/Community/Board/templates/BoardAdsTemplate';

import PostViewHeaderTemplate from 'pages/Community/Board/templates/PostViewHeaderTemplate';
import PostViewBodyTemplate from 'pages/Community/Board/templates/PostViewBodyTemplate';
import PostViewReplyTemplate from 'pages/Community/Board/templates/PostViewReplyTemplate';
import PostViewWriteReplyTemplate from 'pages/Community/Board/templates/PostViewWriteReplyTemplate';
import PostViewFooterTemplate from 'pages/Community/Board/templates/PostViewFooterTemplate';
import PostViewAdsTemplate from 'pages/Community/Board/templates/PostViewAdsTemplate';

import PostWriteHeaderTemplate from 'pages/Community/Board/templates/PostWriteHeaderTemplate';
import PostWriteBodyTemplate from 'pages/Community/Board/templates/PostWriteBodyTemplate';

@inject('communityStore')
class CommunityContainer extends React.Component {

    componentDidMount() {
      this.props.communityStore.data.post.postId === undefined 
        ? this.props.communityStore.getPostList() 
        : this.props.communityStore.getPostById();

      // this.props.communityStore.getAccount();
    }

    render() {
      const pathname = this.props.communityStore.data.history.location.pathname;

      /**
       * pathname :
       * 게시글 목록 /board/postList
       * 게시글 보기 /board/postView
       * 게시글 쓰기 /board/postWrite
       * 게시글 수정 /board/postModify
       */
      // if (postId === undefined) {
      if (pathname === '/board/postList') {
        return (
          <Fragment>
            <TopInfomationTemplate/>
            <BoardHeaderTemplate/>
            <BoardBodyTemplate/>
            <BoardPagingTemplate/>
            <BoardSearchOptionTemplate/>
            <BoardAdsTemplate/>
          </Fragment>
        )
      } else if (pathname === '/board/postView') {
        return (
          <Fragment>
            <TopInfomationTemplate/>
            <PostViewHeaderTemplate/>
            <PostViewBodyTemplate/>
            <PostViewReplyTemplate/>
            <PostViewWriteReplyTemplate/>
            <PostViewFooterTemplate/>
            <PostViewAdsTemplate/>
          </Fragment>
        )
      } else if (pathname === '/board/postWrite') {
        return (
          <Fragment>
            <TopInfomationTemplate/>
            <PostWriteHeaderTemplate/>
            <PostWriteBodyTemplate/>
          </Fragment>
        )
      }
    }
  }

  export default CommunityContainer;