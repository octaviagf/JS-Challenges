//CODING CHALLENGE #1 & #2

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

const calcBMI = function (mass, height) {
  const bmi = mass / height ** 2;
  return bmi;
};

const markBMI = calcBMI(markMass, markHeight);
const johnBMI = calcBMI(johnMass, johnHeight);
const higherBMI =
  markBMI > johnBMI
    ? `Mark's BMI (${Math.round(markBMI)}) is higher than John's`
    : `John's BMI (${Math.round(johnBMI)}) is higher than Mark's`;

console.log(markBMI, johnBMI, higherBMI);

//CODING CHALLENGE #3

const dolphins = [96, 108, 89];
const koalas = [88, 91, 110];

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] / arr.length;
  }
  return Math.round(sum);
}

const dolphinsAverage = calcAverage(dolphins);
const koalasAverage = calcAverage(koalas);
const winner =
  dolphinsAverage > koalasAverage
    ? "Dolphins are the winners!"
    : "Koalas are the winners!";

console.log(dolphinsAverage, koalasAverage, winner);

//CODING CHALLENGE 4

const bill = 275;

const calcTip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${calcTip} and the total value is ${
    bill + calcTip
  }`
);
