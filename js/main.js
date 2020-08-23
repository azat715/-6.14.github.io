const numDivs = 36;
const maxHits = 10;

let hits = 0;
let firstHitTime = 0;
let missClick = 0;


function round() {
    console.log('запуск')
    let divSelector = getRandom();
    let targetRaw = document.getElementsByClassName(`j-slot${divSelector}`);
    let target = targetRaw['0'];
    target.classList.add('target');
    console.log(target);
    target.textContent = hits;
}

const gameField = document.getElementsByClassName('j-game-field');
gameField['0'].addEventListener('click', {
    handleEvent: function (event) { 
        console.log(event.explicitOriginalTarget.classList['2']);
        if (event.explicitOriginalTarget.classList['2'] == 'target') {
            hits++;
            event.explicitOriginalTarget.classList.remove('target')
            if (hits <= maxHits) {
                round();
            } else {
                console.log('конец')
            }
        } else {
            missClick++; 
            console.log('nenndnd')
        }
    }
});


document.addEventListener("DOMContentLoaded", function(event) {
    round();
    console.log('запуск2')
    // а тут нужно ждать когда загрузится весь код? вот эту часть можно убрать?
  });