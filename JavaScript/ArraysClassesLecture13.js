let library = [
  { author: "Bill Gates", title: "The road Ahead", libraryID: "1254" },
  { author: "Steve Jobs", title: "Walter Isacson", libraryID: "4264" },
  { author: "Suzanne Collins", title: "Mockingjay", libraryID: "3245" },
];

let avtori = library.map(function (funkcija) {
  return funkcija.author;
});
console.log(avtori);

let libraryID = library.find(function (funkcija) {
  return (funkcija.libraryID = 1254);
});
console.log(libraryID);

// code  who check  the age of the car
class Car {
  constructor(brand, year, horsepower) {
    this.name = this.name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Ford", 2014);
console.log(myCar.age());

// 2 del od domasna za useri

let users = [
  { name: "Marta Benko", age: "26" },
  { name: "Simon Benko", age: "24" },
  { name: "Daria Benko", age: "22" },
  { name: "Gele Benko", age: "18" },
];

for (let i = 0; i < users.length; i++) {
  if (users[i] > 24) {
    console.log(users[i])("You can drive Jeep Wrangler");
  }
  if (users[i] < 24) {
    console.log(users[i])("You can drive Lada Niva and Nisan Micra");
  }
}
