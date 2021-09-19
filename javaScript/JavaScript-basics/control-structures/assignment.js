const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
  alert('Random number is greater than 0.7');
}

const NUMBERS_ARRAY = [0, 1, 2, 3, 4, 5];

for (let index = NUMBERS_ARRAY.length - 1; index >= 0; index -= 1) {
  console.log(NUMBERS_ARRAY[index]);
}

for (const number of NUMBERS_ARRAY) {
  console.log(number);
}

let counter = NUMBERS_ARRAY.length - 1;

while (counter >= 0) {
  console.log(NUMBERS_ARRAY[counter]);
  counter -= 1;
}

const NEW_RANDOM_NUMBER = Math.random();

if (randomNumber > 0.7 && NEW_RANDOM_NUMBER > 0.7) {
  alert('Both random numbers are greater than 0.7');
} else if (randomNumber <= 0.2 || NEW_RANDOM_NUMBER <= 0.2) {
  alert('One of the two random numbers are lesser or equal to 0.2');
}
