const person = { name: "Bob", age: "Ancient", fav_colour: "Red" };
console.log(person);
console.table(person);
console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);
person.fav_food = "Pizza";
console.log(person.fav_food);

const person2 = {
  name: "guy",
  age: 29,
  fav_colour: "Blue",
  hello: function (name) {
    console.log(`Hello ${name}!`);
    return this.age;
  },
};
let age = person2.hello("Gamer");
console.log(age);

const car = {
  make: "Jaguar",
  model: "Old",
  colour: "chrome",
  advert: function () {
    console.log(
      `Have you been looking for a new way to travel? then introducing: ${this.make} ${this.model} featuring a record low greenhouse emission rate, heated door handles, auto-pilot that will always choose to hit pedestrians, and even a blinding ${this.colour} paintjob <br>`
    );
  },
};

car.advert();

const book = {
  title: "Harry Potter",
  author: "J.K Rowling",
  pages: "too many",
  advert: function () {
    console.log(
      `Introducing an all kind of new book called: ${book.title} by ${book.author} which has a staggering ${book.pages} pages!`
    );
  },
};

book.advert();
