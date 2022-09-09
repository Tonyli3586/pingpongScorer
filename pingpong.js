const selectScore = document.querySelector('#selectS')
const p1score = document.querySelector('#p1score')
const p2score = document.querySelector('#p2score')
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
const reset = document.querySelector('#reset')

let gameOver = false
let winnerScore = 3
selectScore.addEventListener('change', function() {
winnerScore = parseInt(this.value) })

let score1 = 0
p1.addEventListener('click',function(){
    if (gameOver === false) {score1 += 1; p1score.textContent = score1};
    if (score1 === winnerScore) {p1score.textContent = 'WIN';
     gameOver = true;
     p1score.classList.add('win');
     p2score.classList.add('lose');}})

let score2 = 0
p2.addEventListener('click',function(){
    if (gameOver === false) {score2 += 1; p2score.textContent = score2};
    if (score2 === winnerScore) {p2score.textContent = 'WIN'; 
    gameOver = true;
    p2score.classList.add('win');
    p1score.classList.add('lose');}}
)

toBegin = () => {
    gameOver = false;
    p1score.textContent = 0;
    p2score.textContent = 0;
    score1 = 0;
    score2 = 0;
    p1score.classList.remove('win', 'lose');
    p2score.classList.remove('win', 'lose');
}
reset.addEventListener('click', toBegin)



