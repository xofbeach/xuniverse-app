import { observable, action } from 'mobx';
import * as common from 'utils/common.js';
import loginRepository from 'common/modules/Login/repository/LoginRepository'
import { asyncAction } from 'mobx-utils';

export default class LoginStore {
  @observable 
  data = {
    isLogin : false,        // 로그인 여부 [true|false]
    provider : null,        // 로그인 서비스 제공자 [KAKAO|NAVER|GOOGLE]
    userId : null,          // 여기있다 자체 USER ID
    nickname : null,        // 사용자 지정 닉네임
    profile_image : null,   // 사용자 프로필 이미지 URL
    thumbnail_image : null, // 사용자 프로필 썸네일 이미지 URL
    connectedAt : null,     // 로그인 일시
    externalId : null,      // 로그인 서비스 제공자 ID
  }

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  /**
   * 카카오 계정으로 로그인 합니다.
   */
  @action
  handleKakaoLoginClick() {
    const Kakao = window.Kakao;
    const _this = this;

    Kakao.Auth.login({
      success: function(response) {
        Kakao.API.request({
          url: '/v2/user/me',
          success: function(response) {
            _this.setUserInfo('KAKAO', response);
            _this.getUserId();
          },
          fail: function(error) {
            console.log(error);
          }
        });
      },
      fail: function(error) {
        console.log(error);
      },
    });
  }

  /**
   * 카카오 계정을 로그아웃 합니다.
   */
  @action
  handleKakaoLogoutClick() {
    const Kakao = window.Kakao;
    if (Kakao.Auth.getAccessToken()) {
      Kakao.Auth.logout(() => {
        this.deleteLoginCookies();
        this.deleteUserInfo();
        this.setLoginStatus(false);
      });
    }
  }

  /**
   * 로그인 사용자 정보를 갱신합니다.
   * @param {*} provider 공급자
   * @param {*} userAccount 
   */
  setUserInfo(provider, userAccount) {
    this.data = {
      ...this.data,
      provider : provider,
      // userId : "BA86A964FCD911EAA9AC54EE754B1F13",
      nickname : userAccount.properties.nickname,
      profile_image : userAccount.properties.profile_image,
      thumbnail_image : userAccount.properties.thumbnail_image,
      connectedAt : userAccount.connected_at,
      externalId : userAccount.id
    }
  }

  /**
   * 로그아웃 사용자 정보를 삭제합니다.
   */
  deleteUserInfo() {
    this.data = {
      ...this.data,
      provider : null,
      userId : null,
      nickname : null,
      profile_image : null,
      thumbnail_image : null,
      connectedAt : null,
      externalId : null,
    }
  }

  /**
   * 로그인 사용자의 userId를 반환합니다.
   */
  @asyncAction
  async* getUserId() {
    const params = {
      provider : this.data.provider,
      externalId : this.data.externalId,
      connected_at : this.data.connectedAt,
      nickname : this.data.nickname,
    }
    const res = yield loginRepository.getUserId(params);
    if (res.status === 200) {
      this.data.userId = res.data.userId;
      this.setLoginCookies();
      this.setLoginStatus(true);
    }
  }

  /**
   * 로그인 상태값을 갱신합니다.
   * @param {*} isLogin 
   */
  setLoginStatus(isLogin) {
    this.data.isLogin = isLogin;
  }

  /**
   * Cookie에 로그인 정보를 설정합니다.
   */
  setLoginCookies() {
    common.setCookie("isLogin", true);
    common.setCookie("provider", this.data.provider);
    common.setCookie("userId", this.data.userId);
    common.setCookie("nickname", this.data.nickname);
    common.setCookie("profile_image", this.data.profile_image);
    common.setCookie("thumbnail_image", this.data.thumbnail_image);
  }

  /**
   * Cookie에 설정된 로그인 정보를 삭제합니다.
   */
  deleteLoginCookies() {
    common.deleteCookie("isLogin");
    common.deleteCookie("provider");
    common.deleteCookie("userId");
    common.deleteCookie("nickname");
    common.deleteCookie("profile_image");
    common.deleteCookie("thumbnail_image");
  }
}