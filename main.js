const cookieEl = document.querySelector('.cookie')
const scoreEl = document.querySelector('.score')
const achievementEl = document.querySelector('.achievement')

let score = 0

scoreEl.innerHTML = score

cookieEl.addEventListener('click', () => {
    score++
    scoreEl.innerHTML = score

    if (score == 10) {
        achievementEl.innerHTML = 'Parabéns você reciclou 10 itens'
    }
})


