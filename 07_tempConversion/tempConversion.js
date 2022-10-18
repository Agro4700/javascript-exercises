const ftoc = function(temp) {
  C = (temp - 32) * 5/9;
  celsius = Math.round(C * 10) / 10;

  return celsius;
};

const ctof = function(temp) {
    F = (temp * 9/5) + 32;
    fahrenheit = Math.round(F * 10) / 10;

    return fahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
