// project 2 bmi solution

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
});
const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');

if (height === '' || height < 0 || isNaN(height)) {
  results.innerHTML = `please give a valid value of height${height}`;
} else if (weight === '' || weight < 0 || isNaN(weight)) {
  results.innerHTML = `please give a valid value of weight${weight}`;
} else {
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  results.insertAdjacentElement = <span>bmi</span>;
}
