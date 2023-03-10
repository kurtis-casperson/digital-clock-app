import { currentTime, body } from './date.js'

// Add current time to the clock
const hour = currentTime.getHours()
const minutes = currentTime.getMinutes()
const seconds = currentTime.getSeconds()

const hourStandard = hour > 12 ? hour - 12 : hour
const addZero = hour >= 13 && hour <= 21 ? '0' : ''
const amPm = hour > 12 ? 'PM' : 'AM'

// const hiddenTicker = () => {
//   document.getElementById('seconds').style.visibility = 'hidden'
// }

// const visibleTicker = () => {
//   document.getElementById('seconds').style.visibility = 'visible'
// }

// const decideTicker = () => {
//   if (ticker === visibleTicker) {
//     hiddenTicker
//   } else {
//     return hiddenTicker
//   }
// }

// Time is offset by one second allow the colon to be hidden and then visible again and look natural
// const hiddenInterval = setInterval(hiddenTicker, 1000)
// const visibleInterval = setInterval(visibleTicker, 2000)

const currentTimeFormat = `${addZero}${hourStandard} :
  ${minutes} : ${seconds} ${amPm}`
const currentTimeElement = document.createElement('div')
currentTimeElement.id = 'currentTimeElement'
currentTimeElement.innerHTML = `<div> ${currentTimeFormat} </div>`
body.append(currentTimeElement)
