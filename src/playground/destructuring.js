// const person = {
//   //name: 'Felipe',
//   age: 29,
//   location: {
//     city: 'Campinas',
//     temp: 26
//   }
// };

// const {name: firstname = 'Zé Ninguém', age} = person;

// console.log(`${firstname} is ${age}`);

// const {temp: temperature, city} = person.location;

// console.log(`Its ${temperature} in ${city}.`);

const address = ['4370 Av. Washington Luis', 'Campinas', 'São Paulo', '13042-105'];

const [, city, state = 'Brasília'] = address;

console.log(`You are in ${city} ${state}`);