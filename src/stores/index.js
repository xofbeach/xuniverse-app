import CommunityStore from 'pages/Community/Board/modules/store/CommunityStore';
import MapStore from 'pages/Map/NaverMap/modules/store/MapStore';
import LoginStore from 'common/modules/Login/store/LoginStore';

class RootStore {
  constructor() {
    this.communityStore = new CommunityStore(this);
    this.mapStore = new MapStore(this);
    this.loginStore = new LoginStore(this);
  }
}

export default RootStore;
