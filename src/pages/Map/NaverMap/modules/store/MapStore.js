import React from 'react';
import { action, observable } from 'mobx';
import * as mapUtil from 'utils/mapUtil.js';
import MarkerTemplate from 'pages/Map/NaverMap/templates/MarkerTemplate';
import mapRepository from 'pages/Map/NaverMap/modules/repository/MapRepository'
import { asyncAction } from 'mobx-utils';

export default class MapStore {
  @observable
  data = {
    center: { 
      lat: mapUtil.center.lat,
      lng: mapUtil.center.lng
    },
    zoom: 16,
    // FilterableProductTable
    filterText: '',
    inStockOnly: false,
    data : {},
    markers: [],
    refNaverMap: null,
    sideInfomation : {
      visible: false,
      header : '',
      data : []
    },
    searchOptions: {
      searchKeyword : "",
      options: mapUtil.searchOptions.options
    }
  }

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  /**
   * ref.NaverMap
   * NaverMap의 onCenterChanged를 리스너로 하여 CenterChanged 이벤트가 발생한 시점에 호출되며,
   * 전달받은 Center 값을 Store에 설정합니다.
   * @param {*} center 
   */
  @action
  handleCenterChanged(center) {
    this.data.center = center;
  }

  /**
   * ref.NaverMap
   * NaverMap의 onZoomChanged를 리스너로 하여 ZoomChanged 이벤트가 발생한 시점에 호출되며,
   * 표시할 Marker Group이 변경되었다면 현재 Zoom Range에 맞는 마커를 조회하여 NaverMap에 표시합니다.
   * 표시할 마커그룹에 변화가 없다면 handleBoundsChanged를 호출합니다.
   * @param {*} zoom 
   */
  @asyncAction
  async* handleZoomChanged(zoom) {
    if (mapUtil.checkZoomChange(zoom, this.data.zoom) || (Array.isArray(this.data.markers) && this.data.markers.length === 0)) {
      // marker 초기화
      this.data.markers = [];

      const { data, status } = yield mapRepository.getMarkerPoint({zoom : zoom});
      if (status === 200) {
        const markers = [];
        const navermaps = window.naver.maps;
        const bounds = this.data.bounds;

        /**
         * { apt } 아파트
         * { rowHouse } 연립/다세대
         * { detachedHouse } 단독/다가구
         * { officetel } 오피스텔
         */
        const displayTrade = this.data.searchOptions.options[0].value === '0' || this.data.searchOptions.options[0].value === null ? 'trade' : 'rental'; // 0 : trade, 1 : rental
        const displayType = 'apt';
        const displayData = data[displayTrade][displayType];
        displayData.forEach((markerData) => {
          if (this.data.refNaverMap.map.getBounds().hasLatLng([markerData.x, markerData.y])) {
            markers.push(
              <MarkerTemplate
                markerData={markerData}
                onMarkerClicked={(markerData) => this.handleMarkerClicked(markerData)}
                zoom={zoom}
                displayTrade={displayTrade}
              />
            );
          }
        });
        this.data = {
          ...this.data,
          markers : markers,
          zoom : zoom,
          data : data
        }
      }
    } else {
      this.data.zoom = zoom;
      this.handleBoundsChanged();
    }
  }

  /**
   * Marker 클릭 시 Marker의 Lat, Lng 값을 Center로 설정(Center 이동)하고 Zoom 레벨을 변경합니다.
   * Zoom 레벨 변경 시 새로운 마커를 표시합니다.
   * @param {*} markerData 
   */
  @action
  handleMarkerClicked(markerData) {
    let newZoom;
    if (this.data.zoom <= 10) {
      newZoom = 11;
    } else if (this.data.zoom >= 11 && this.data.zoom <= 12) {
      newZoom = 13;
    } else if (this.data.zoom >= 13 && this.data.zoom <= 15) {
      newZoom = 16;
    } else if (this.data.zoom >= 16) {
      newZoom = this.data.zoom;
    }

    if (newZoom >= 16 && this.data.zoom >= 16) {
      // sideInfomation 표시
      this.data.sideInfomation = {
        ...this.data.sideInfomation,
        visible : true,
        header : markerData
      }
      // 최대 Zoom 상태일 경우 해당 Marker 상세정보 조회
      this.getMarkerDetail(markerData, () => this.handleZoomChanged(newZoom));
    } else {
      // 변경될 줌레벨로 조회
      this.handleZoomChanged(newZoom);
    }
    
    this.data = {
      ...this.data,
      zoom: newZoom,
      center: { lat: markerData.y, lng: markerData.x }
    }
  }

  /**
   * 선택 된 마커의 상세정보를 조회합니다.
   * @param {*} markerData 
   * @param {*} zoomChange 
   */  
  // getMarkerDetail = flow(function * (markerData, zoomChange) {
  //   const params = {
  //     administrativeDistrictLev1 : markerData.administrativeDistrictLev1,
  //     administrativeDistrictLev2 : markerData.administrativeDistrictLev2,
  //     administrativeDistrictLev3 : markerData.administrativeDistrictLev3,
  //     roadName : markerData.roadName,
  //     complexName : markerData.complexName
  //   }

  //   const { data, status } = yield mapRepository.getMarkerDetail(params);
  //   if (status === 200) {
  //     this.data.sideInfomation = {
  //       ...this.data.sideInfomation,
  //       data : data
  //     }
  //     zoomChange();
  //   }
  // })
  @asyncAction
  async* getMarkerDetail(markerData, zoomChange) {
    const params = {
      administrativeDistrictLev1 : markerData.administrativeDistrictLev1,
      administrativeDistrictLev2 : markerData.administrativeDistrictLev2,
      administrativeDistrictLev3 : markerData.administrativeDistrictLev3,
      roadName : markerData.roadName,
      complexName : markerData.complexName
    }

    const {data, status} = yield mapRepository.getMarkerDetail(params);
    if (status === 200) {
      this.data.sideInfomation.data = data;
      zoomChange();
    }
  }

  // FilterableProductTable
  @action
  handleFilterTextChange(filterText) {
    this.data.filterText = filterText;
  }
  
  @action
  handleInStockChange(inStockOnly) {
    this.data.inStockOnly = inStockOnly;
  }

	/**
	 * ref.NaverMap
   * NaverMap의 onDragend를 리스너로 하여 마우스 드래그 이벤트가 끝난 시점에 호출되며,
   * 호출된 시점의 Center 값을 기반하여 마커를 표시 할 마커를 설정합니다. 
	 */
  @action
  handleBoundsChanged() {
    if (this.data.refNaverMap !== null) {
      const markers = [];
      const navermaps = window.naver.maps;
      const zoom = this.data.zoom;
      const displayTrade = this.data.searchOptions.options[0].value === '0' || this.data.searchOptions.options[0].value === null ? 'trade' : 'rental'; // 0 : trade, 1 : rental
      const displayType = 'apt';
      const displayData = this.data.data[displayTrade][displayType];
      displayData.forEach((markerData) => {
        if (this.data.refNaverMap.map.getBounds().hasLatLng([markerData.x, markerData.y]))  {
          markers.push(
            <MarkerTemplate
              markerData={markerData}
              onMarkerClicked={(markerData) => this.handleMarkerClicked(markerData)}
              zoom={zoom}
              displayTrade={displayTrade}
            />
          );
        }
      });
      this.data.markers = markers;
    }
  }

  /**
   * NaverMap의 참조를 설정합니다.
   * @param {*} ref NaverMap naverRef
   */
  @action
  setNaverMapRef(ref) {
    this.data.refNaverMap = ref;
  }
  
  /**
   * SideInfomation창을 표시하지 않도록 합니다.
   */
  @action
  handleCloseSideInfomation() {
    this.data.sideInfomation.visible = false;
  }

  @action
  handleShowSearchOptionDtl(key) {
    /**
     * 0) 기본사항
     *  0-1) 기본선택 ( 옵션 : 매매/ 디테일 : 매매/ 그외 옵션 : 전체 )
     * 
     * 1) 옵션 클릭
     *  1-1) 선택 된 옵션 클릭
     *    1-1-1) 디테일 뷰 활성화 / 선택된 디테일 표시
     *  1-2) 선택되지 않은 옵션 클릭
     *    1-2-1) 디테일 뷰 활성화 / 선택된 디테일이 없으므로 전체 표시
     *  1-3) 선택 된 옵션의 디테일 뷰가 활성화 되어 있는 경우 디테일 뷰 닫기
     * 
     * 2) 디테일 클릭
     *  2-1) 클릭 된 디테일 강조표시 / 옵션명을 디테일명으로 변경
     */
    const options = this.data.searchOptions.options;
    let newOptions = [];
  
    options.forEach(element => {
      let newOption;
      if (element.key === key) {
        newOption = {
          ...element,
          selected : element.value === null ? !element.selected : element.selected,
          isShowDtl : !element.isShowDtl
        }
      } else {
        newOption = {
          ...element,
          selected : element.value === null ? false : element.selected,
          isShowDtl : false
        }
      }
      newOptions.push(newOption);
    })
    this.data.searchOptions = {
      options : newOptions
    }
  }

  @action
  handleSelectSearchOption(dtlOptionKey, value) {
    let options = this.data.searchOptions.options;
    options.forEach(element => {
      if (element.key === dtlOptionKey) {
        if (dtlOptionKey === 'trade') {
          element.value = value;
        } else {

          element.value = value === "0" ? null : value;
        }
      }
    })
    this.data.searchOptions = {
      options : options
    }
    this.filterGroupChange();
  }

  @action
  filterGroupChange() {
    const markers = [];
    // const bounds = this.data.bounds;
    const zoom = this.data.zoom;
    const displayTrade = this.data.searchOptions.options[0].value === '0' || this.data.searchOptions.options[0].value === null ? 'trade' : 'rental'; // 0 : trade, 1 : rental
    const displayType = 'apt';
    const displayData = this.data.data[displayTrade][displayType];
    displayData.forEach((markerData) => {
      if (this.data.refNaverMap.map.getBounds().hasLatLng([markerData.x, markerData.y])) {
        markers.push(
          <MarkerTemplate
            markerData={markerData}
            onMarkerClicked={(markerData) => this.handleMarkerClicked(markerData)}
            zoom={zoom}
            displayTrade={displayTrade}
          />
        );
      }
    });
    this.data.markers = markers;
  }
}