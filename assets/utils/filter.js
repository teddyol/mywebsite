/**
*格式时间
* @param time 时间戳
* @param line 连接线(- /)
* @param full 完整时间(除去秒)
*/
export const formatTime = (time, line, full) => {
  if (time) {
    var d = new Date(parseInt(time));
    if (!full) {
      return (d.getFullYear()) + line + (d.getMonth() + 1 > 9 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1)) + line + (d.getDate() > 9 ? d.getDate() : '0' + d.getDate());
    } else {
      return (d.getFullYear()) + line + (d.getMonth() + 1 > 9 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1)) + line + (d.getDate() > 9 ? d.getDate() : '0' + d.getDate()) + ' ' + (d.getHours() > 9 ? d.getHours() : '0' + d.getHours()) + ':' + (d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes());
    }
  } else {
    return '';
  }
};