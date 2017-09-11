//tablespoon to ounce

var tbsToOunce = function (tablespoon) {
  return tablespoon / 2;
};

//cup to ounce

var cupToOunce = function (cup) {
  return cup * 8;
};

//gallon to liter

var galToLiter = function (gallon) {
  return gallon * 3.78541178;
};

var tablespoon = prompt("How many tablespoons do you need?");
alert("That is " + tbsToOunce(tablespoon) + " ounces.");

var cup = prompt("How many cups do you need?");
alert("That is " + cupToOunce(cup) + " ounces.");

var gallon = prompt("How many gallons do you need?");
alert("That is about " + (galToLiter(gallon)).toFixed(0) + " liters.");
