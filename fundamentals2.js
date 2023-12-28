//CHALLENGE #1

const dolphins = [85, 54, 41];
const koalas = [23, 34, 27];

const calcAverage = function (team) {
  return team.reduce((acc, score) => acc + score / team.length, 0);
};

const averageDolphins = calcAverage(dolphins);
const averageKoalas = calcAverage(koalas);

console.log(averageDolphins, averageKoalas);

const checkWinner =
  averageDolphins >= 2 * averageKoalas
    ? `Dolphins win (${averageDolphins} vs ${averageKoalas})`
    : `Koalas win (${averageKoalas} vs ${averageDolphins})`;

console.log(checkWinner);

//CHALLENGE #2

const arrBills = [125, 555, 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const calcTip = arrBills.map((bill) => {
  return bill >= 50 || bill <= 300 ? bill + bill * 0.15 : bill + bill * 0.2;
});

console.log(calcTip);

const tips = arrBills.map((bill) => {
  return bill >= 50 || bill <= 300 ? bill * 0.15 : bill * 0.2;
});

console.log(tips);

const totalBills = tips.map((tip, i) => {
  return tip + arrBills[i];
});

console.log(totalBills);

const calcAverageBills = function (bills) {
  return bills.reduce((acc, curr) => acc + curr / bills.length);
};

console.log(calcAverageBills(totalBills));

//CHALLENGE #3

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function (mass, height) {
    return mass / (height * height);
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function (mass, height) {
    return mass / height ** 2;
  },
};

const markBMI = mark.calcBMI(mark.mass, mark.height);
const johnBMI = john.calcBMI(john.mass, john.height);

console.log(markBMI, johnBMI);

const higherBMI =
  markBMI > johnBMI
    ? `Mark's BMI (${Math.round(markBMI)}) is higher than John's (${Math.round(
        johnBMI
      )}).`
    : `John's BMI (${Math.round(johnBMI)}) is higher than Mark's (${Math.round(
        markBMI
      )}).`;

console.log(higherBMI);

//CHALLENGE #4
