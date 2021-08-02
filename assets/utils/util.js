// 路由返回上页
export const goBack = (self, n) => {
  if (history.length > n) {
    self.$router.go(-n);
  } else {
    self.$router.replace({ path: '/' });
  }
};

// 时间戳转时间
/**
 *
 * @param {时间戳} date
 * @param {拼接字符} str
 * @param {是否返回带时分秒} all
 */
export const formDate = (data, str, all) => {
  if (!str) {
    str = '-';
  }
  let date = new Date(data);
  let YY = date.getFullYear() + str;
  let MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + str;
  let DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
  if (!all) {
    return YY + MM + DD;
  }
  let hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
  let mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
  // let ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
  return YY + MM + DD + ' ' + hh + ':' + mm;
};

// 数字转中文
export const toChinesNum = (num) => {
  if (!num) {
    return '';
  }
  let changeNum = ['零', '一', '二', '三', '四', '五', '六', '天'];
  let unit = ['', '十', '百', '千', '万'];
  num = parseInt(num);
  let getWan = (temp) => {
    let strArr = temp.toString().split('').reverse();
    let newNum = '';
    for (var i = 0; i < strArr.length; i++) {
      newNum = (i === 0 && strArr[i] === 0 ? '' : (i > 0 && strArr[i] === 0 && strArr[i - 1] === 0 ? '' : changeNum[strArr[i]] + (strArr[i] === 0 ? unit[0] : unit[i]))) + newNum;
    }
    return newNum;
  };
  let overWan = Math.floor(num / 10000);
  let noWan = num % 10000;
  if (noWan.toString().length < 4) {
    noWan = '0' + noWan;
  }
  return overWan ? getWan(overWan) + '万' + getWan(noWan) : getWan(num);
};

// 获取地址栏参数
export const getUrlParms = (name) => {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ''])[1].replace(/\+/g, '%20')) || null;
};

// 判断操作系统
export const mobileSystem = () => {
  let u = navigator.userAgent;
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 || u.indexOf('Adr') > -1;
  let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  if (isAndroid) {
    return 'Android';
  } else if (isiOS) {
    return 'iOS';
  }
};