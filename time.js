import { currentTime, body } from './date.js'

// Add current time to the clock
// const hour = currentTime.getHours()
// const minutes = currentTime.getMinutes()
// const seconds = currentTime.getSeconds()

// const hourStandard = hour > 12 ? hour - 12 : hour
// const addZero = hour >= 13 && hour <= 21 ? '0' : ''
// const amPm = hour > 12 ? 'PM' : 'AM'

// Time is offset by one second allow the colon to be hidden and then visible again and look natural

// const currentTimeFormat = `${addZero}${hourStandard} :
//   ${minutes} : ${seconds} ${amPm}`
// const currentTimeElement = document.createElement('div')
// currentTimeElement.id = 'currentTimeElement'
// currentTimeElement.innerHTML = `<div> ${currentTimeFormat} </div>`
// body.append(currentTimeElement)

// make the time up to date at all times
// need to get the seconds every second
const renderClock = () => {
  const hour = currentTime.getHours()
  const minutes = currentTime.getMinutes()
  const seconds = currentTime.getSeconds()

  const hourStandard = hour > 12 ? hour - 12 : hour
  const addZero = hour >= 13 && hour <= 21 ? '0' : ''
  const amPm = hour >= 12 ? 'PM' : 'AM'
  const addZeroSeconds = seconds >= 0 && seconds <= 9 ? '0' : ''
  const addZeroMinutes = minutes >= 0 && minutes <= 9 ? '0' : ''

  const currentTimeFormat = `${addZero}${hourStandard} :
   ${addZeroMinutes} ${minutes} : ${addZeroSeconds}${seconds} ${amPm}`

  const timeElement = document.getElementById('current-time')
  timeElement.textContent = currentTimeFormat
}
// setInterval is a reference to a function
const interval = setTimeout(currentTime.getSeconds, 1000)
interval
const secondsInterval = setInterval(renderClock, 1000)

setInterval(() => {
  clearInterval(secondsInterval)
}, 1000)
console.log(currentTime.getSeconds())
