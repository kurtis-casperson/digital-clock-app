export const currentTime = new Date()
export const body = document.body

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

const nthDayofMonth = (nthnumber) => {
  if (nthnumber > 3 && nthnumber < 21) return 'th'
}

const stDaysOfMonth = [1, 21, 31]

const rdDaysOfMonth = []

const thDaysOfMonth = []

const currentDateFormat = `${currentDayOfWeek}, ${currentMonth} ${dayOfMonth} ${year}`

const currentDateElement = document.createElement('div')
currentDateElement.innerHTML = `<div> ${currentDateFormat} </div>`
body.append(currentDateElement)
