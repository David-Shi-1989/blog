Date.prototype.format = function(formatStr) {
  var o = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'h+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds(),
    'q+': Math.floor((this.getMonth() + 3) / 3),
    'S': this.getMilliseconds()
  }
  if (/(y+)/.test(formatStr)) {
    var  str1 = this.getFullYear().toString().substr(4 - RegExp.$1.length)
    formatStr = formatStr.replace(RegExp.$1, str1)
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(formatStr)) {
      formatStr = formatStr.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(String(o[k]).length))
    }
  }
  return formatStr
}

Number.prototype.random = function (max, min) {
  var _max = (!isNaN(max) ? parseInt(max) : 10)
  var _min = (!isNaN(max) ? parseInt(max) : 0)
  var dis = _max - _min
  return (Math.floor(Math.random() * (dis + 1)) + _min)
}