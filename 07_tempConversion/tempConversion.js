const convertToCelsius = function(F) {
  
  
  return Math.round(((F - 32) * 5 / 9) * 10) / 10;


};

//(32°F - 32) × 5 ÷ 9 = 0°C

const convertToFahrenheit = function(C) {
  return Math.round(((C * 9 / 5) + 32) * 10) / 10;


};

//(0°C×9÷5) + 32 ＝ 32°F


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
