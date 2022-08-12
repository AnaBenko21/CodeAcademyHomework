let numOne = 1;
let numZero = 0;
let stringOne = "1";
let stringZero = "0";
let stringTen = "ten";
let booleanTrue = true;
let booleanFalse = false;
let numNull = null;
let textUndefind = undefined;
let quotationMarkSingle = "";
let quotationMarkDouble = ""; //Ne funkcioniraat single marks '' so prettier se pretvaraat vo double

let dayOfBirth = 12;
let fullNameSum = 14;
let subtractYearOfBirth = 94 - 19;
let SumYearOfBirth = 1 + 9 + 9 + 4;
console.log(dayOfBirth, fullNameSum, subtractYearOfBirth, SumYearOfBirth); //Dodadeni se site varijabli vo console.log ako sakam da se soberat site 4 varijabli izmegju stavam +

let higherVariable = dayOfBirth > fullNameSum; //Prvata varijabla dali e pogolema od vtorata varijabla , true ili false
console.log(higherVariable);

let devideReminder = subtractYearOfBirth % SumYearOfBirth; // % DEVISION REMINDER ILI MODUL ostatokot od podelen zbir
console.log(devideReminder);

let totalOfAll = "I am the "; //Dokolku 5 varijabla e true  i ostatokot od 6 varijabla e pomal od 3 vo 7 varijabla da pisuva light dokolku ne e taka da e darkness
if (higherVariable == true && devideReminder < 3) {
  console.log(totalOfAll + "light");
} else {
  console.log(totalOfAll + "darkness");
}
