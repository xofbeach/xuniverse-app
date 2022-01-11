import axios from "axios";

class CommunityRepository {
  URL = "http://localhost:8080/api/community";
  WITH_CREDENTIALS = { withCredentials : true };

  constructor(attr) {
      Object.assign(this, attr);
  }

  getPostList(params) {
    return axios.post(this.URL+'/getPostList', params, this.WITH_CREDENTIALS);
  }

  getPostById(params) {
    return axios.post(this.URL+'/getPostById', params, this.WITH_CREDENTIALS);
  }

  deletePostById(params) {
    return axios.post(this.URL+'/deletePostById', params, this.WITH_CREDENTIALS);
  }

  registerReply(params) {
    return axios.post(this.URL+'/registerReply', params, this.WITH_CREDENTIALS);
  }

  registerReReply(params) {
    return axios.post(this.URL+'/registerReReply', params, this.WITH_CREDENTIALS);
  }

  modifyReReply(params) {
    return axios.post(this.URL+'/modifyReReply', params, this.WITH_CREDENTIALS);
  }

  uploadFile(params) {
    return axios.post(this.URL+'/uploadFile', params, this.WITH_CREDENTIALS)
  }
}

// 싱글톤으로 리턴 (매번 새로운 객체를 생성 할 필요가 없다면 처음 부터 싱글톤으로 export)
export default new CommunityRepository();