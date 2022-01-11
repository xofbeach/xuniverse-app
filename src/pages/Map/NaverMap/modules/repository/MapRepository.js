import axios from "axios";

class MapRepository {
  URL = "http://localhost:8080/api/map";
  WITH_CREDENTIALS = { withCredentials : true };

  constructor(attr) {
      Object.assign(this, attr);
  }

  /**
   * 선택 된 마커의 상세정보를 조회합니다.
   * @param {*} params 
   * @param {*} zoomChange 
   */
  getMarkerDetail(params) {
    return axios.post(this.URL+'/getMarkerDetail',  params, this.WITH_CREDENTIALS);
  }

  /**
   * 마커를 위치시킬 포인트(Lat, Lng)를 조회합니다.
   * @param {*} params 
   */
  getMarkerPoint(params) {
    return axios.post(this.URL+ '/getMarkerPoint', params, this.WITH_CREDENTIALS);
  }
}

// 싱글톤으로 리턴 (매번 새로운 객체를 생성 할 필요가 없다면 처음 부터 싱글톤으로 export)
export default new MapRepository();