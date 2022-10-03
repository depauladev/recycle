const cookieEl = document.querySelector('.cookie')
const scoreEl = document.querySelector('.score')

let score = 0

scoreEl.innerHTML = score

cookieEl.addEventListener('click', () => {
    score++
    scoreEl.innerHTML = score
})
