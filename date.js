const currentTime = new Date()

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const currentDayOfWeek = days[currentTime.getDay()]

const currentMonth = months[currentTime.getMonth()]

const dayOfMonth = currentTime.getDate()

const year = currentTime.getFullYear()

const nthDayofMonth = (nthnumber) => {
  if (nthnumber > 3 && nthnumber < 21) return 'th'
  switch (nthnumber % 10) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}

const currentDateFormat = `${currentDayOfWeek}, ${currentMonth} ${dayOfMonth}${nthDayofMonth(
  dayOfMonth
)} ${year}`

const dateElement = document.getElementById('current-date')
dateElement.textContent = currentDateFormat
