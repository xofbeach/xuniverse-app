import axios from "axios";

class LoginRepository {
  URL = "http://localhost:8080/api/user";
  WITH_CREDENTIALS = { withCredentials : true };

  constructor(attr) {
      Object.assign(this, attr);
  }

  getUserId(params) {
    return axios.post(this.URL+'/getUserId', params, this.WITH_CREDENTIALS);
  }
}

// 싱글톤으로 리턴 (매번 새로운 객체를 생성 할 필요가 없다면 처음 부터 싱글톤으로 export)
export default new LoginRepository();