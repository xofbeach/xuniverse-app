/**
 * Zoom 변경 여부를 반환합니다.
 * @param {number} newZoom 변경 된 Zoom
 * @param {number} originalZoom 변경 전 Zoom
 * @return {boolean} Zoom 변경 여부
 */
export var checkZoomChange = function(newZoom, originalZoom) {
  // ~10      시도 1
  // 11~ 12   구 2
  // 13~ 15   동 3
  // 16~      개별 4
  let result = false;
  let newZoomRange = getZoomRange(newZoom);
  let originalZoomRange = getZoomRange(originalZoom);

  if (newZoomRange !== originalZoomRange) {
    result = true;
  }
  return result;
}

/**
 * 현재 줌 레벨이 속한 범위(1~4)를 반환합니다.
 * @param {*} zoom 줌 레벨
 */
var getZoomRange = function(zoom) {
  let zoomRange;
  if (zoom >= 16) {
    zoomRange = 4;
  } else if (zoom >= 13 && zoom <= 15) {
    zoomRange = 3;
  } else if (zoom >= 11 && zoom <= 12) {
    zoomRange = 2;
  } else if (zoom <= 10) {
    zoomRange = 1;
  }
  return zoomRange;
}

export const center = {
    // 그린팩토리 lat: 37.3595704, lng: 127.105399 
    lat: 37.4872035, // 타워팰리스
    lng: 127.0530399
}

export const searchOptions = {
  options: [
    { key : "trade", name : "매매", value : "0", selected : true, isShowDtl : false }, 
    { key : "type", name : "유형", value : null, selected : false, isShowDtl : false }, 
    { key : "area", name : "평형", value : null, selected : false, isShowDtl : false }, 
    { key : "price", name : "가격", value : null, selected : false, isShowDtl : false }, 
    { key : "household", name : "세대수", value : null, selected : false, isShowDtl : false }, 
    { key : "since", name : "입주년차", value : null, selected : false, isShowDtl : false }, 
    { key : "floorAreaRatio", name : "용적률", value : null, selected : false, isShowDtl : false }, 
    { key : "buildingCoverageRatio", name : "건폐율", value : null, selected : false, isShowDtl : false }, 
    { key : "rentRate", name : "전세가율", value : null, selected : false, isShowDtl : false }, 
    { key : "gapPrice", name : "갭가격", value : null, selected : false, isShowDtl : false }, 
    { key : "rentalBusinessRatio", name : "임대사업율", value : null, selected : false, isShowDtl : false }, 
    { key : "profitRatio", name : "월세수익율", value : null, selected : false, isShowDtl : false }, 
    { key : "parking", name : "주차공간", value : null, selected : false, isShowDtl : false }, 
    { key : "etc", name : "현관/난방", value : null, selected : false, isShowDtl : false }, 
  ]
}