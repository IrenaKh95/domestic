//task 1

// const objectA = {
//     a: 10,
//     b: true,
//     c: 'abc'
// }
// console.log(objectA);

// const copyOfA = objectA;
// copyOfA.a = 20;
// console.log(copyOfA);
// console.log(objectA.a);

// copyOfA.c = 'abc'
// console.log(objectA.c);

// const copyOfB = objectA;
// copyOfB.b = false;
// console.log(copyOfB.b, copyOfB);

// const copyOfD = objectA;
// copyOfD.d = 123;
// console.log(copyOfD);

// function a () {
//     console.log("My Name - Irena :)")
//     };
// a();

// const b = () => {
//     console.log("Pustelnicka 1")
// };
// b();

// const myCity = {
//     city: "NY",
//     info: {
//         isPopular: true,
//         country: "USA"
//     }
// };
// console.log(myCity);
// console.log(myCity.info.isPopular);
// delete myCity.info.isPopular;
// console.log(myCity);
// myCity.info["codeCountry"] = "09-007";
// myCity.info["numberOfPeople"] = "10.057.357.750";
// myCity.info["numberOfStates"] = "54";
// myCity["secondSity"] = "Los Angeles"
// console.log(myCity);

// myCity.popular = true;
// console.log(myCity);
// myCity.country = "USA";
// console.log(myCity);
// console.log(myCity.country);
// console.log(myCity.city);
// myCity.city = "LA";
// console.log(myCity);

// delete myCity.country
// console.log(myCity);

// const countryPropertyName = "country";
// myCity[countryPropertyName] = "USA";
// console.log(myCity);

// const name = "Ireno4ka";
// const postQty = 27;
// const userProfile = {
//     name,
//     postQty, 
//     hasSignedAgreement: false
// };
// console.log(userProfile);

// const myCity = {
//     city: "NY",
//     cityGreeting: function () {
//         console.log('Greetings!!')
//     }
// };
// myCity.cityGreeting();
// console.log(myCity);

// const myCity = {
//     city: "NY",
//     cityGreeting() {
//         console.log('Greetings!!')
//     }
// };
// myCity.cityGreeting();

// const post = {
//     title: "My Post",
//     likerQty: 5
// };
// JSON.stringify(post);
// console.log(post);


const person = {
    name: "Irena",
    age: 27
};
console.log(person);

const person2 = Object.assign({}, person)
person2.age = 37;

console.log(person.age);
console.log(person2.age);
