const jumpLink = document.querySelector('#jump'),
      train    = document.querySelector('#train'),
      ball     = document.querySelector('#ball'),
      canva    = document.querySelector('#canva'),
      startButton = document.querySelector('#start');

let inJump = false;

function jump() {
  if (inJump) {
    return;
  }

  ball.classList.add('jump');
  inJump = true;

  setTimeout(function() {
    ball.classList.remove('jump');

    inJump = false;
  }, 900);
}

jumpLink.addEventListener('click', jump);
startButton.addEventListener('click', function() {
  canva.classList.add('start');
});

const parseParams = function(element) {
  const styles = window.getComputedStyle(element);

  return {
    width: parseInt(styles['width']),
    height: parseInt(styles['height']),
    x: parseInt(styles['left']),
    y: parseInt(styles['bottom'])
  };
};

const detectColision = function(elementA, elementB) {
  let verticalColision = elementA['y'] + elementA['height'] > elementB['y'] && elementA['y'] < elementB['y'] + elementB['height'];
  let horizontalColision = elementA['x'] + elementA['width'] > elementB['x'] && elementA['x'] < elementB['x'] + elementB['width'];

  return horizontalColision && verticalColision;
}

const gameLoop = function() {
  let ballOutput = parseParams(ball);
  let trainOutput = parseParams(train);

  if (detectColision(ballOutput, trainOutput)) {
    canva.classList.remove('start');
  }
};

setInterval(gameLoop, 100);
