const currentTime = new Date()
const body = document.body

console.log(currentTime)

// month and day of week are zero based

// Add the current date

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

const dayOfWeek = currentTime.getDay()

const currentDayOfWeek = days[dayOfWeek]

const month = currentTime.getMonth()

const currentMonth = months[month]

const dayOfMonth = currentTime.getDate()

const year = currentTime.getFullYear()

// Add switch statement to reduce code.  Useful for adding the Nth to an array of different values.
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
