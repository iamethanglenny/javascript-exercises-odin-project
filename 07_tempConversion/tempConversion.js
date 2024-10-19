const convertToCelsius = function(fahrenheitDegree) {
  const toCelsius = Math.ceiling((fahrenheitDegree - 32) * (5 / 9));
  return toCelsius;
};

const convertToFahrenheit = function(fahrenheitDegree) {
  const ToFahrenheit = Math.ceil((fahrenheitDegree  * (9 / 5)) + 32);
  return ToFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
