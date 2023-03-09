import { currentTime, body } from './date.js'

// Add current time to the clock
const hour = currentTime.getHours()
const minutes = currentTime.getMinutes()
const seconds = currentTime.getSeconds()

console.log(hour, minutes, seconds)

// Should this be its own element?
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

// const decideTicker = () => {
//   if (ticker === visibleTicker) {
//     hiddenTicker
//   } else {
//     return hiddenTicker
//   }
// }

// Time is offset by one second allow the colon to be hidden and then visible again and look natural
const hiddenInterval = setInterval(hiddenTicker, 1000)
const visibleInterval = setInterval(visibleTicker, 2000)

const currentTimeFormat = `${hour} 
  ${minutes}  ${seconds}`
const currentTimeElement = document.createElement('div')
currentTimeElement.id = 'currentTimeElement'
currentTimeElement.innerHTML = `<div> ${currentTimeFormat} </div>`
body.append(currentTimeElement)
