const numDivs = 36;
const maxHits = 10;

let hits = 0;
let firstHitTime = 0;


function round() {
    let divSelector = getRandom();
    let targetRaw = document.getElementsByClassName(`j-slot${divSelector}`);
    let target = targetRaw['0'];
    target.classList.add('target');
    target.textContent = hits
    target.addEventListener('click', () => {
        console.log("Нажато")
        target.classList.remove('target')
        target.textContent = ''
    });
}

const gameField = document.getElementsByClassName('j-game-field');
gameField['0'].addEventListener('click', {
    handleEvent: function (event) { 
        console.log(event); 
      }
});

document.addEventListener("DOMContentLoaded", function(event) {
    round() 
    // а тут нужно ждать когда загрузится весь код? вот эту часть можно убрать?
  });