// make the time up to date at all times

const renderClock = () => {
  // new Date needs to be called becasue the current second needs to be called every second
  // without it the new date the state is static
  const today = new Date()
  const hour = today.getHours()
  const minutes = today.getMinutes()
  const seconds = today.getSeconds()

  const hourStandard = () => {
    if (hour === 24) return '0'
    if (hour >= 13) return hour - 12
    else return hour
  }

  const addZeroHour = () => {
    if (hour === 24) return '0'
    if (hour >= 1 && hour <= 9) return '0'
    if (hour >= 13 && hour <= 21) return '0'
    else return ''
  }

  const amPm = hour >= 12 && hour < 24 ? 'PM' : 'AM'
  const addZeroSeconds = seconds >= 0 && seconds <= 9 ? '0' : ''
  const addZeroMinutes = minutes >= 0 && minutes <= 9 ? '0' : ''

  const currentTimeFormat = `${addZeroHour()}${hourStandard()} :
   ${addZeroMinutes}${minutes} : ${addZeroSeconds}${seconds} ${amPm}`

  const timeElement = document.getElementById('current-time')
  timeElement.textContent = currentTimeFormat
}

const secondsInterval = setInterval(renderClock, 1000)
