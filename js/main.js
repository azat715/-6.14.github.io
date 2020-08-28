const numDivs = 36;
const maxHits = 10;

let hits = 0;
let missClick = 0;

const btn1 = document.querySelector('.jbt-start');
const btn2 = document.querySelector('.jbt-restart');

const resWin = document.querySelector('.j-modal');

times = {
    firstHitTime: null,
    start() {
        this.firstHitTime = Date.now();
    },
    end() {
        return Math.floor((Date.now() - this.firstHitTime) / 1000)
    },
}

function round() {
    let divSelector = getRandom();
    let targetRaw = document.getElementsByClassName(`j-slot${divSelector}`);
    let target = targetRaw['0'];
    target.classList.add('target');
    target.textContent = hits;
}

const gameField = document.getElementsByClassName('j-game-field')['0'];
gameField.addEventListener('click', {
    handleEvent: function (event) { 
        if (event.target.classList['2'] == 'target') {
            hits++;
            event.target.classList.remove('target')
            event.target.textContent = ""
            if (hits <= maxHits) {
                round();
            } else {
                endGame();
            }
        } else {
            missClick++; 
            event.target.classList.add('miss');
            setTimeout(() => {
                event.target.classList.remove('miss'); 
            }, 1000);
        }
    }
});

function endGame() {
    totalPlayedSeconds = times.end();
    gameField.style['pointer-events'] = "none";
    gameField.style['opacity'] = "0.4";
    resWin.style['opacity'] = "1";
    resWin.style['visibility'] = "visible";
    let resDiv = document.createElement('div');
    resDiv.innerHTML = `<p>Вы выбрали 10 зеленых квадратов за ${totalPlayedSeconds} секунд <br />
                        Количество ложных нажатий - ${missClick}</p>`;
    resDiv.setAttribute('class', 'res')
    resWin.appendChild(resDiv);
}

function init() {
    btn1.addEventListener('click', () => {
        gameField.style['display'] = "flex";
        btn1.disabled = 'disabled';
        times.start();
        round();
      });
};

btn2.addEventListener('click', () => {
    resWin.style['opacity'] = "0";
    resWin.style['visibility'] = "hidden";
    gameField.style['pointer-events'] = "auto";
    gameField.style['opacity'] = "1";
    hits = 0;
    missClick = 0;
    times.start();
    round();
});

document.addEventListener("DOMContentLoaded", function(event) {
    gameField.style['display'] = "none";
    init();
  });