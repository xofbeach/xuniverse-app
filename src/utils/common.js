// ref. https://ko.javascript.info/cookie
/**
 * 
 * @param {*} name 
 * @param {*} value 
 * @param {*} options 
 */
// Example of use:
// setCookie('user', 'John', {secure: true, 'max-age': 3600});
export var setCookie = function (name, value, options = {}) {
  options = {
    path: '/',
    // 필요한 경우, 옵션 기본값을 설정할 수도 있습니다.
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

/**
 * 
 * @param {*} name 
 */
export var getCookie = function (name) {
  // 주어진 이름의 쿠키를 반환하는데,
  // 조건에 맞는 쿠키가 없다면 undefined를 반환합니다.
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

/**
 * 
 * @param {*} name 
 */
export var deleteCookie = function (name) {
  setCookie(name, "", {
    'max-age': -1
  })
}































































// /**
//  * 
//  * @param {*} name 
//  * @param {*} value 
//  * @param {*} exp 
//  * 
//  * using
//  * setCookie(변수이름, 변수값, 기간);
//  * setCookie("expend", "true", 1);
//  */
// export var setCookie = function(name, value, exp) {
//   var date = new Date();
//   date.setTime(date.getTime() + exp*24*60*60*1000);
//   document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
// };

// /**
//  * 
//  * @param {*} name 
//  * 
//  * using
//  * getCookie(변수이름)
//  * var is_expend = getCookie("expend");
//  * console.log("쿠키 is_expend변수에 저장된 값: "+is_expend);
//  */
// export var getCookie = function(name) {
//   var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
//   return value? value[2] : null;
// };

// /**
//  * 
//  * @param {*} name 
//  * 
//  * using
//  * deleteCookie(변수이름)
//  * deleteCookie('name');
//  */
// export var deleteCookie = function(name) {
//   document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
// }