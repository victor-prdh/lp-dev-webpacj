import '../css/style.css';

// Import img
import blueshell from '../img/blueshell.png'
import star from '../img/star.png'
import bobomb from '../img/bobomb.png'
import mario from '../img/mario.png'
import luigi from '../img/luigi.png'
import peach from '../img/peach.png'
import up from '../img/1up.png'
import mushroom from '../img/mushroom.png'
import thwomp from '../img/thwomp.png'
import bulletbill from '../img/bulletbill.png'
import coin from '../img/coin.png'
import goomba from '../img/goomba.png'


const cardsArray = [{
    'name': 'shell',
    'img': blueshell,
  },
  {
    'name': 'star',
    'img': star,
  },
  {
    'name': 'bobomb',
    'img': bobomb,
  },
  {
    'name': 'mario',
    'img': mario,
  },
  {
    'name': 'luigi',
    'img': luigi,
  },
  {
    'name': 'peach',
    'img': peach,
  },
  {
    'name': '1up',
    'img': up,
  },
  {
    'name': 'mushroom',
    'img': mushroom,
  },
  {
    'name': 'thwomp',
    'img': thwomp,
  },
  {
    'name': 'bulletbill',
    'img': bulletbill,
  },
  {
    'name': 'coin',
    'img': coin,
  },
  {
    'name': 'goomba',
    'img': goomba,
  },
];

const gameGrid = cardsArray
  .concat(cardsArray)
  .sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(item => {
  const { name, img } = item;

  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

const match = () => {
  const selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
};

const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};

grid.addEventListener('click', event => {

  const clicked = event.target;

  if (
    clicked.nodeName === 'SECTION' ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected') ||
    clicked.parentNode.classList.contains('match')
  ) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }

});