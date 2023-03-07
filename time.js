import { currentTime, body } from './date'

const hour = currentTime.getHours()
const minutes = currentTime.getMinutes()
const seconds = currentTime.getSeconds()

console.log(hour, minutes, seconds)
// const clockTick = () => {}
