export function time(beginTime, endTime) {
  var second = parseInt(endTime.split('-')[1]) - parseInt(beginTime.split('-')[1])
  var hour = parseInt(endTime.split('-')[0]) - parseInt(beginTime.split('-')[0])
  if (second < 0) {
    second = 60 + second
    hour = hour - 1
    return {
      second,
      hour,
    }
  } else {
    return {
      second,
      hour,
    }
  }
}

// 9-20 - 8:30
// 20 -30 = -10
// 60-10 = 50分
// 9-8 = 1 小时
// 获得 相差的秒和分
