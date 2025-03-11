const dias = document.querySelector("#theNumbers > li:nth-child(1)")
const horas = document.querySelector("#theNumbers > li:nth-child(3)")
const minutos = document.querySelector('#theNumbers > li:nth-child(5)')
const segundos = document.querySelector('#theNumbers > li:nth-child(7)')

const targetDate = new Date("2025-03-30").getTime()

function updateCountdown() {
    const now = new Date().getTime()
    const timeLeft = targetDate - now

    if (timeLeft <= 0) {
        dias.innerText = "00"
        horas.innerText = "00"
        minutos.innerText = "00"
        segundos.innerText = "00"
        return
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

    dias.innerText = days.toString().padStart(2, '0')
    horas.innerText = hours.toString().padStart(2, '0')
    minutos.innerText = minutes.toString().padStart(2, '0')
    segundos.innerText = seconds.toString().padStart(2, '0')
}

setInterval(updateCountdown, 1000)
updateCountdown()

const bg = document.querySelector('.bg')
const loginBox = document.querySelector('.loginBox')

const btnSubscribe = document.querySelector('#btnSubscribe')
const btn = document.querySelector('#btn')

btnSubscribe.addEventListener('click', () => {
    bg.classList.add('blurElement')
    loginBox.classList.remove('hideElement')
})

btn.addEventListener('click', () => {
    bg.classList.remove('blurElement')
    loginBox.classList.add('hideElement')
    newSubscriber()
})

function newSubscriber() {
    window.alert('Obrigado Por Se Inscrever! 💜')
}
