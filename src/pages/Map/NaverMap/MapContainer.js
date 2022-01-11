import React, { Fragment } from 'react';
import axios from "axios";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';

import TopInfomationTemplate from 'common/components/Login/TopInfomationTemplate';
import RenderAfterNavermapsLoadedTemplate from 'pages/Map/NaverMap/templates/RenderAfterNavermapsLoadedTemplate';
import ControlPanelTemplate from 'pages/Map/NaverMap/templates/ControlPanelTemplate';
import SideInfomationTemplate from 'pages/Map/NaverMap/templates/SideInfomationTemplate';
import SearchOptionGroupTemplate from 'pages/Map/NaverMap/templates/SearchOptionGroupTemplate';
import { inject, observer } from 'mobx-react';

@inject('mapStore')
@observer
class MapContainer extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {

    //   }
    //   // FilterableProductTable
    //   this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    //   this.handleInStockChange = this.handleInStockChange.bind(this);
    //   this.handlePanToTarget = this.handlePanToTarget.bind(this);
    // }


  
    componentDidMount() {
      // axios (
      //   {
      //       url: '/api/map/getAptRealTransactionDetail',
      //       method: 'post',
  
      //       /**
      //        * 개발 환경에서의 크로스 도메인 이슈를 해결하기 위한 코드로
      //        * 운영 환경에 배포할 경우에는 15~16행을 주석 처리합니다.
      //        * 
      //        * ※크로스 도메인 이슈: 브라우저에서 다른 도메인으로 URL 요청을 하는 경우 나타나는 보안문제
      //        */
      //       baseURL: 'http://localhost:8080',
      //       withCredentials: true,
      //   }
      // ).then((response) => {
      //     this.setState({ 
      //       products: response.data
      //     });
      // });
  
      // axios.post('http://localhost:8080/api/map/getAptRealTransData', {dealYear:"2020",dealMonth: "6", dealDay:"10"})
      //   .then((response) => {
      //     const markers = [];
      //     const navermaps = window.naver.maps;
      //     response.data.forEach((product) => {
      //       markers.push(
      //         <Marker
      //           key={product.transactionId}
      //           position={new navermaps.LatLng(product.y, product.x)}
      //           animation={0}
      //           onClick={() => {alert('naver green factofy');}}
      //           draggable={true}
      //           // icon={product.transactionId}
      //           icon={{                
      //             content:  [
      //               '<div class="cs_mapbridge">',
      //                 '<div class="map_group _map_group crs">',
      //                     '<div class="map_marker _marker num1 num1_big"> ',
      //                         '<span class="ico _icon">'+product.administrativeDistrictLev3+" "+product.complexName+'</span>',
      //                         '<span class="shd"></span>',
      //                     '</div>',
      //                 '</div>',
      //               '</div>'
      //             ].join(''),
      //             size:{width:32,height:32},
      //             scaledSize:{width:24,height:32},
      //             anchor: {x:12, y:32}
      //           }}
      //         />
      //       );
      //     });
      //     this.setState({
      //       products: response.data,
      //       markers : markers
      //     })
      //   });
  
      // this.handleZoomChanged(this.state.zoom);
      this.props.mapStore.handleZoomChanged(this.props.mapStore.data.zoom);
      // window.Kakao.init('52246b2b953e7e32a35b038bdd0a908e'); // -> index.html 에서 처리
    }
  


    render() {
      return (
        <Fragment>
          <TopInfomationTemplate/>
          <RenderAfterNavermapsLoaded ncpClientId='8yviwlp4q3'>
            <RenderAfterNavermapsLoadedTemplate/>
          </RenderAfterNavermapsLoaded>
          {/* <FilterableProductTable
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            products={this.state.products}
            handleFilterTextChange={(t) => this.handleFilterTextChange(t)}
            handleInStockChange={(t) => this.handleInStockChange(t)}
            handlePanToTarget={(x, y) => this.handlePanToTarget(x, y)}
          /> */}
          <SearchOptionGroupTemplate/>
          <SideInfomationTemplate/>
          <ControlPanelTemplate/>
        </Fragment>
      )
    }
  }

  export default MapContainer;