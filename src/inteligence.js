function generatePopulation() {
  const population = [];
  const dna = [];

  for (var populationIndex = 0; populationIndex< 10;  populationIndex++) {
    population[populationIndex] = [];

    for (var dnaIndex = 0; dnaIndex < 10; dnaIndex++) {
      population[populationIndex][dnaIndex] = Math.random();
    }
  }


  return population;
}

let population = generatePopulation();
const currentPopulation = document.querySelector('#current_population');

start();

let dnaIndex = 0;

const gamer = setInterval(function() {
  let trainStep = window.trainOutput['x'];
  let fitStep = Math.round((trainStep + 150) / 95);

  let currentDna = population[dnaIndex];

  if (currentDna[fitStep] <= 0.5) {
    jump();
    console.log(currentDna[fitStep], 'jump');
    console.log(currentDna);
  }
}, 100);

