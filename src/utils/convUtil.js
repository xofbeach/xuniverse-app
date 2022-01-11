/**
 * 거래금액을 입력받아 1.2억 형태로 반환합니다.
 * @param {number} amt 거래금액
 * @return {string} 1.2억 형태의 거래금액
 */
var convAmt = function(amt) {
  let floorAmt = Math.floor(amt);
  let strAmt = floorAmt.toString();
  let lenAmt = strAmt.length;
  let result = '';
  if (lenAmt === 3) {
    result = '0.0' + strAmt.substr(0,1); // 0.01억
  } else if (lenAmt === 4) {
    result = '0.' + strAmt.substr(0,1); // 0.1억
  } else if (lenAmt === 5) {
    result = strAmt.substr(0,1) + '.' + strAmt.substr(1,1); // 1.2억
  } else if (lenAmt === 6) {
    result = strAmt.substr(0,2) + '.' + strAmt.substr(2,1); // 12.3억
  } else if (lenAmt === 7) {
    result = strAmt.substr(0,3) + '.' + strAmt.substr(3,1); // 123.4억
  } else if (lenAmt === 8) {
    result = strAmt.substr(0,4) + '.' + strAmt.substr(4,1); // 1234.5억
  }
  return result + '억';
}

/**
 * 거래금액을 입력받아 세자리 마다 콤마(,)를 붙혀 반환합니다.
 * @param {number} x 거래금액
 * @return {string} 세자리 마다 콤마(,)가 있는 거래금액
 */
var numberWithCommas = function(x) {
  return x.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Zoom 레벨에 따른 표시정보를 반환합니다.
 * @param {object} markerData 거래정보
 * @param {number} zoom 줌레벨
 * @param {string} displayTrade filterGroup에서 선택된 매매/전월세 구분 값
 * @return {string} Zoom 레벨에 따른 표시정보
 */
// var markerInfomation = function(markerData, zoom, displayTrade) {
//   // ~10	시도	1
//   // 11	구	2
//   // 12	구	2
//   // 13	동	3
//   // 14	동	3
//   // 15	동	3
//   // 16~	개별	4
//   let result ='';
//   const amountType = displayTrade === 'trade' ? 'transactionAmount' : 'depositAmount'
//   if (zoom >= 16) {
//     result = Math.floor(markerData.exclusiveArea/3.3)+'평' + '<br>' + this.convAmt(markerData[amountType]);
//   } else if (zoom >= 13 && zoom <= 15) {
//     result = markerData.administrativeDistrictLev3 + '<br>' + this.convAmt(markerData[amountType]);
//   } else if (zoom >= 11 && zoom <= 12) {
//     result = markerData.administrativeDistrictLev2 + '<br>' + this.convAmt(markerData[amountType]);
//   } else if (zoom <= 10) {
//     result = markerData.administrativeDistrictLev1 + '<br>' + this.convAmt(markerData[amountType]);
//   }
//   return result;
// }
var markerInfomationArea = function(markerData, zoom, displayTrade) {
  // ~10	시도	1
  // 11	구	2
  // 12	구	2
  // 13	동	3
  // 14	동	3
  // 15	동	3
  // 16~	개별	4
  let result ='';
  const amountType = displayTrade === 'trade' ? 'transactionAmount' : 'depositAmount'
  if (zoom >= 16) {
    result = Math.floor(markerData.exclusiveArea/3.3)+'평';
  } else if (zoom >= 13 && zoom <= 15) {
    result = markerData.administrativeDistrictLev3;
  } else if (zoom >= 11 && zoom <= 12) {
    result = markerData.administrativeDistrictLev2;
  } else if (zoom <= 10) {
    result = markerData.administrativeDistrictLev1;
  }
  return result;
}

var markerInfomationAmount = function(markerData, zoom, displayTrade) {
  // ~10	시도	1
  // 11	구	2
  // 12	구	2
  // 13	동	3
  // 14	동	3
  // 15	동	3
  // 16~	개별	4
  let result ='';
  const amountType = displayTrade === 'trade' ? 'transactionAmount' : 'depositAmount'
  if (zoom >= 16) {
    result = this.convAmt(markerData[amountType]);
  } else if (zoom >= 13 && zoom <= 15) {
    result = this.convAmt(markerData[amountType]);
  } else if (zoom >= 11 && zoom <= 12) {
    result = this.convAmt(markerData[amountType]);
  } else if (zoom <= 10) {
    result = this.convAmt(markerData[amountType]);
  }
  return result;
}

/**
 * String 형태의 날짜를 입력받아 YYYY.MM.DD 형태의 날짜로 반환합니다.
 * @param {string} yearMonth 
 * @param {string} day 
 * @return {string} YYYY.MM.DD 형태의 날짜
 */
var getStrDateToFormatStrData = function(yearMonth, day) {
  var sYear = yearMonth.substr(0,4);
  var sMonth = yearMonth.substr(4,2);
  var sDate = day.length === 1 ? '0' + day : day;
  return sYear + '.' + sMonth + '.' + sDate;
}

/**
 * Zoom 레벨에 따른 마커 Tooptip 정보를 반환합니다.
 * @param {object} markerData 거래정보
 * @param {number} zoom 줌레벨
 * @param {string} displayTrade filterGroup에서 선택된 매매/전월세 구분 값
 * @return {string} Zoom 레벨에 따른 마커 Tooltip 정보
 */
var markerTooltip = function(markerData, zoom, displayTrade) {
  let result = '';
  if (zoom >= 16) {
    result += '<span>'+markerData.complexName+'↘'+'</span>';
    result += '<span>'+markerData.administrativeDistrictLev1+' '+markerData.administrativeDistrictLev2+' '+markerData.administrativeDistrictLev3+' '+markerData.roadName+'</span>';
  } else if (zoom >= 13 && zoom <= 15) {
    result += '<span>'+markerData.administrativeDistrictLev1+' '+markerData.administrativeDistrictLev2+'↘'+'</span>';
    result += '<span>'+markerData.administrativeDistrictLev3+'</span>';
  } else if (zoom >= 11 && zoom <= 12) {
    result += '<span>'+markerData.administrativeDistrictLev1+'↘'+'</span>';
    result += '<span>'+markerData.administrativeDistrictLev2+'</span>';
  } else if (zoom <= 10) {
    result += '<span>'+markerData.administrativeDistrictLev1+'</span>';
  }

  return result;
}

/**
 * image resize
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
var resizeImage = function (settings) {
  var file = settings.file;
  var maxSize = settings.maxSize;
  var reader = new FileReader();
  var image = new Image();
  var canvas = document.createElement('canvas');
  var dataURItoBlob = function (dataURI) {
      var bytes = dataURI.split(',')[0].indexOf('base64') >= 0 ?
          atob(dataURI.split(',')[1]) :
          unescape(dataURI.split(',')[1]);
      var mime = dataURI.split(',')[0].split(':')[1].split(';')[0];
      var max = bytes.length;
      var ia = new Uint8Array(max);
      for (var i = 0; i < max; i++)
          ia[i] = bytes.charCodeAt(i);
      return new Blob([ia], { type: 'image/jpeg'});
  };
  var resize = function () {
      var width = image.width;
      var height = image.height;
      if (width > height) {
          if (width > maxSize) {
              height *= maxSize / width;
              width = maxSize;
          }
      } else {
          if (height > maxSize) {
              width *= maxSize / height;
              height = maxSize;
          }
      }
      canvas.width = width;
       canvas.height = height;
      canvas.getContext('2d').drawImage(image, 0, 0, width, height);
      var dataUrl = canvas.toDataURL('image/jpeg');
      // return dataURItoBlob(dataUrl);
      return dataUrl;
  };
  return new Promise(function (ok, no) {
      if (!file.type.match(/image.*/)) {
          no(new Error("Not an image"));
          return;
      }
      reader.onload = function (readerEvent) {
          image.onload = function () { return ok(resize()); };
          image.src = readerEvent.target.result;
      };
      reader.readAsDataURL(file);
  });
};






exports.convAmt = convAmt;
exports.numberWithCommas = numberWithCommas;
exports.markerInfomationArea = markerInfomationArea;
exports.markerInfomationAmount = markerInfomationAmount;
exports.getStrDateToFormatStrData = getStrDateToFormatStrData;
exports.markerTooltip = markerTooltip;
exports.resizeImage = resizeImage;