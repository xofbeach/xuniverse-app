import React, { Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import * as common from 'utils/common.js';

@inject('loginStore')
@observer
class TopInfomationTemplate extends React.Component {
    render() {
      const loginStore = this.props.loginStore;
      const isLogin_store = loginStore.data.isLogin;
      const isLogin_cookie = common.getCookie('isLogin');
      // console.log('store-isLogin : '+isLogin_store)
      // console.log('cookie-isLogin: '+isLogin_cookie)
      if (isLogin_store || isLogin_cookie) {
        const nickname = common.getCookie('nickname');
        const profile_image = common.getCookie('profile_image');
        const thumbnail_image = common.getCookie('thumbnail_image');
        
        return (
          <div>
            <img src={thumbnail_image} width={50} height={50} style={{float:'right'}}></img>
            <p style={{textAlign: 'right'}}>{nickname}</p>
          </div>
        )
      } else {
        return (
          <div>
            <p style={{textAlign: 'right'}}>로그인</p>
          </div>
        )
      }
    }
}

export default TopInfomationTemplate;