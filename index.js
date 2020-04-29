let pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

getAge = pet => new Date().getFullYear() - pet.bornOn;


let petsWithAge = pets.map(age => Object.assign(a, {age: getAge(age)}));

let dogs = petsWithAge.filter(dog => dog.type === "dog");

let jasper = petsWithAge.find(j => j.name === "Jasper");
console.log("Jasper is " + jasper.age + " years old");
