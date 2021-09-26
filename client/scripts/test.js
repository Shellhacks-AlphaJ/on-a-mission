const timeRange = document.querySelector('#time-range')
const timeRangeLabelElement = document.querySelector('#lbl-time-range')
const countdownElement = document.querySelector('.countdown')

const startingMinutes = 30
let time = startingMinutes * 60

timeRange.addEventListener('input', (event) => {
    let minutes = timeRange.value
    let labelValue = timeRange.value
    if (minutes == 1) labelValue += ' minute'
    else if (minutes == 60) {
        labelValue = '1 hour'
    } else labelValue += ' minutes'

    timeRangeLabelElement.innerHTML = labelValue
    // time = minutes * 60
    time = minutes
})

function updateCountdown() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60 //time % 60

    seconds = seconds < 10 ? '0' + seconds : seconds
    countdownElement.innerHTML = `${minutes}: ${seconds}`
    time--
    if (time == 0) {
        console.log('finished')
        clearInterval()
    }
}

function begin() {
    setInterval(updateCountdown, 1000)
    timeRange.disabled = true
}
