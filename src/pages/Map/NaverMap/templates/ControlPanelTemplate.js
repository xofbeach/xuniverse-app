import React, { Fragment } from 'react';
import axios from "axios";
import { inject, observer } from 'mobx-react';

@inject('loginStore')
@observer
class ControlPanelTemplate extends React.Component {
    constructor(props) {
      super(props);
  
      this.callBatch1 = this.callBatch1.bind(this);
    }
    
    callBatch1() {
      axios.post('http://localhost:8080/batch/searchGeocode', {dealYear:"2020",dealMonth: "6", dealDay:"10"})
      .then((response) => {
        this.setState({
          products: response.data
        })
      });
    }
  
    render() {
      const loginStore = this.props.loginStore;
      return (
        <div>
          <button onClick={this.callBatch1}>callBatch:searchGeocode</button>
          <button onClick={() => loginStore.handleKakaoLoginClick()}>카카오 로그인</button>
          <button onClick={() => loginStore.handleKakaoLogoutClick()}>카카오 로그아웃</button>
          {/* <button onClick={() => loginStore.handleKakaoAccountRequestClick()}>카카오 계정정보 가져오기</button> */}
        </div>
      )
    }
}

export default ControlPanelTemplate;