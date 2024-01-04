const convertToCelsius = function(degreeF) {
  return parseFloat(((degreeF - 32) * (5/9)).toFixed(1));
};

const convertToFahrenheit = function(degreeC) {
  return parseFloat(((degreeC * (9/5)) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
