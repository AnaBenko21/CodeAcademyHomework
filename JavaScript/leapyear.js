function month() {
  let month = prompt("Vnesi mesec:");
  let Thirtydays = ["1", "3", "5", "7", "8", "10", "12"];
  let Thirtyonedays = ["4", "6", "9", "11"];
  let February = ["2"];

  if (Thirtydays.includes(month)) {
    return 30;
  } else if (Thirtyonedays.includes(month)) {
    return 31;
  } else if (February.includes(month)) {
    let year = prompt("Vnesi godina:");
    let x = checkLeapYear(year);
    return x;
  }
}
let a = month();
console.log(a);

// Za da se proveri preodna godina moze da se napise eden od ovie tri nacini ili site 3 zaedno  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400))
// function checkLeapYear(year) {
//   if (0 == year % 4) {
//     console.log(year + " is a leap year");
//   } else {
//     console.log(year + " is not a leap year");
//   }
// }
// const year = prompt("Enter a year:");
// checkLeapYear(year);

// So ovoj kod proveruva dali Fevruari sodrzi 29 dena ako sodrzi znci deka e prestapna godina ako ne ne eprestapna godina

function checkLeapYear(year) {
  const leap = new Date(year, 1, 29).getDate() === 29;
  if (leap) {
    return 29;
  } else {
    return 28;
  }
}

// const year = prompt("Enter a year:");
// checkLeapYear(year);
const fruits = ["Apple", "Banana", "Orange"];
for (x of fruits) {
  console.log(x);
}
