import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from "axios";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="6">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;

    return (
      <tr>
        {/* <a href="#" onClick={() => this.handlePanToTarget(product.transactionId)}>{product.complexName}('{(product.constructionYeae).substr(-2)})</a> */}
        <a href="#" onClick={() => this.props.handlePanToTarget(product.transactionId)}>{product.complexName}('{(product.constructionYeae).substr(-2)})</a>
        <td>{product.exclusiveArea}({(product.exclusiveArea/3.3).toFixed(2)})</td>
        <td>{product.floor}</td>
        <td>{numberWithCommas(product.transactionAmount)}</td>
        <td>{product.dealYearMonth}-{product.dealYearMonth}-{product.dealDay}</td>
        <td>{product.administrativeDistrictLev2} {product.administrativeDistrictLev3}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
    // this.handlePanToTarget = this.handlePanToTarget.bind(this);
  }

  // handlePanToTarget(targetId) {
  //   this.props.handlePanToTarget(targetId);
  // }

  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.complexName.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.legalDistrict !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.legalDistrict}
            key={product.legalDistrict} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.transactionId}
          handlePanToTarget={(transactionId) => this.props.handlePanToTarget(transactionId)}
        />
      );
      lastCategory = product.legalDistrict;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>아파트명(건축년도)</th>
            <th>전용면적m²(평)</th>
            <th>층</th>
            <th>거래금액(만원)</th>
            <th>계약일자</th>
            <th>위치</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }
  
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
      products: []
    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
    this.handlePanToTarget = this.handlePanToTarget.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  // handlePanToTarget(transactionId) {
  //   console.log("targetId: "+ transactionId);
  // }

  handlePanToTarget(transactionId) {
    axios.post('http://localhost:8080/api/getGeocode', {transactionId : transactionId})
      .then((response) => {
        // this.setState({
        //   products: response.data
        // })
        const geocode = response.data
        console.log(geocode)
        this.setState({ center: { lat: geocode.X, lng: geocode.Y }})
        // this.setState({ center: { lat: 37.3595704, lng: 127.105399 }})
      });
  }

  componentDidMount() {
    // axios (
    //   {
    //       url: '/api/getAptRealTransactionDetail',
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

    axios.post('http://localhost:8080/api/getAptRealTransData', {dealYear:"2020",dealMonth: "6", dealDay:"10"})
    // axios.post('http://localhost:8080/batch/searchGeocode', {dealYear:"2020",dealMonth: "6", dealDay:"10"})
      .then((response) => {
        this.setState({
          products: response.data
        })
      });
  }


  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.state.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          handlePanToTarget={(transactionId) => this.handlePanToTarget(transactionId)}
        />
      </div>
    );
  }
}

class RenderAfterNavermapsLoadedTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      center: { 
        lat: 37.3595704,
        lng: 127.105399 
      }
    }
    this.panToNaver = this.panToNaver.bind(this);
  }

  panToNaver() {
    this.setState({ center: { lat: 37.3595704, lng: 127.105399 }})
  }

  render() {
    const navermaps = window.naver.maps;
    return (
      <div>
        <button onClick={this.panToNaver}>Pan To Naver</button>
        <p>lat: {this.state.center.y || this.state.center.lat}</p>
        <p>lng: {this.state.center.x || this.state.center.lng}</p>
        <NaverMap 
          id='maps-getting-started-controlled' 
          style={{width: '100%', height: '400px'}}
          
          // uncontrolled zoom
          defaultZoom={16}

          // controlled center
          // Not defaultCenter={this.state.center}
          center={this.state.center}
          onCenterChanged={center => this.setState({ center })}
        >
          <Marker
            key={1}
            position={new navermaps.LatLng(37.3595704, 127.105399)}
            animation={0}
            onClick={() => {alert('naver green factofy');}}
          />
        </NaverMap>
      </div>
    )
  }
}

class ControlPanel extends React.Component {
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
    return (
      <button onClick={this.callBatch1}>callBatch1</button>
    )
  }
}

ReactDOM.render(
  <div>
    <RenderAfterNavermapsLoaded ncpClientId='8yviwlp4q3'>
      <RenderAfterNavermapsLoadedTemplate />
    </RenderAfterNavermapsLoaded>
    <FilterableProductTable/>
    <ControlPanel/>
  </div>,
  document.getElementById('root')
);

function numberWithCommas(x) {
  return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}