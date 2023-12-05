const person = { name: "Bob", age: "Ancient", fav_colour: "Red" };
console.log(person);
console.table(person);
console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);
person.fav_food = "Pizza";
console.log(person.fav_food);

const car = { make: "Jaguar", model: "Old", colour: "Maroon" };
console.log(
  `Have you been looking for a new way to travel? then introducing: ${car.make} ${car.model} featuring a record low greenhouse emission rate, heated door handles, auto-pilot that will always choose to kill pedestrians, and even a blinding ${car.colour} paintjob`
);
