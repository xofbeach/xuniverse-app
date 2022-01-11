import React, { Fragment } from 'react';
import ReactDOM, { render } from 'react-dom';
import 'css/index.css';
// import 'css/hgnn_index.css';

import Root from 'client/Root';
import RootStore from 'stores/index';
// import CommunityStore from 'stores/CommunityStore';
// import LoginStore from 'stores/LoginStore';
import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider

const rootStore = new RootStore(); // *** 루트 스토어 생성
// const counterStore = new CounterStore();
// const communityStore = new CommunityStore();
// const loginStore = new LoginStore();

ReactDOM.render(
  <Provider 
    rootStore={rootStore}
    communityStore={rootStore.communityStore}
    mapStore={rootStore.mapStore}
    loginStore={rootStore.loginStore}
  >
    <Root/>
  </Provider>,
  document.getElementById('root')
);