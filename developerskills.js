const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  return arr.map((temp, i) => {
    return `${temp}ºC in ${i + 1} day${i === 0 ? " " : "s"}`;
  });
};

console.log(printForecast(arr1));
console.log(printForecast(arr2));
