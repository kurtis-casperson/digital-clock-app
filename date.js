const currentTime = new Date()
const body = document.body

console.log(currentTime)

// Add current time to the clock

const hour = currentTime.getHours()
const minutes = currentTime.getMinutes()
const seconds = currentTime.getSeconds()

console.log(hour, minutes, seconds)

const ticker = document.createElement('ticker')
ticker.id = 'ticker'
ticker.innerHTML = '<div> : </div>'
body.append(ticker)

const hiddenTicker = () => {
  document.getElementById('ticker').style.visibility = 'hidden'
}

const visibleTicker = () => {
  document.getElementById('ticker').style.visibility = 'visible'
}

// Time is offset by one second allow the colon to be hidden and then visible again and look natural
const hiddenInterval = setInterval(hiddenTicker, 1000)
const visibleInterval = setInterval(visibleTicker, 2000)

currentTimeFormat = `${hour} 
  ${minutes}  ${seconds}`
const currentTimeElement = document.createElement('div')
currentTimeElement.innerHTML = `<div> ${currentTimeFormat} </div>`
body.append(currentTimeElement)

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

const currentDateFormat = `${currentDayOfWeek}, ${currentMonth} ${dayOfMonth} ${year}`

const currentDateElement = document.createElement('div')
currentDateElement.innerHTML = `<div> ${currentDateFormat} </div>`
body.append(currentDateElement)
