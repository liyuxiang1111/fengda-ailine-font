import moment from 'moment'
function formatDate(value) {
  if (value) {
    if (typeof value === 'string') {
      return moment(String(value)).format('YYYY-MM-DD')
    } else if (typeof value === 'number') {
      return moment.unix(value / 1000).format('YYYY-MM-DD')
    }
  }
}

function formatDateTimeSec(value) {
  if (value) {
    if (typeof value === 'string') {
      return moment(String(value)).format('YYYY-MM-DD HH:mm:ss')
    } else if (typeof value === 'number') {
      return moment.unix(value / 1000).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}

export default {
  formatDate,
  formatDateTimeSec,
}
