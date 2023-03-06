let currentTime = new Date()

console.log(currentTime)

// month and day of week are zero based

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

currentDayOfWeek = days[dayOfWeek]

const month = currentTime.getMonth()

const currentMonth = months[month]

const dayOfMonth = currentTime.getDate()

const year = currentTime.getFullYear()

const hour = currentTime.getHours()

const currentDateFormat = `${currentDayOfWeek}, ${currentMonth} ${dayOfMonth} ${year}`

document.body.innerHTML = `<h2> ${currentDateFormat} </h2>`

console.log(document.getElementById('clock-app'))
