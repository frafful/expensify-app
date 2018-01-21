import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// const onValueChange = (snapshot) => {
//   const expenses = [];
  
//   snapshot.forEach(( childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses)
// };

// database.ref('expenses').on('value', onValueChange);

// database.ref('expenses').push({
//     description: 'Pussy',
//     amount: 777556,
//     note: '',
//     createdAt: 2000
//   }
// );

// const firebaseExpenses = {
//   expenses: {
//     iuju: {
//       description: 'Rent',
//       amount: 30000,
//       note: '',
//       createdAt: 100
//     },
//     jhdh: {
//       description: 'Card',
//       amount: 25410,
//       note: '',
//       createdAt: 10000
//     },
//     aewea: {
//       description: 'Rent',
//       amount: 22525,
//       note: '',
//       createdAt: 1000
//     }
//   }
// };

// database.ref().set(firebaseExpenses);

// database.ref('notes').push({
//   title: 'Course topics',
//   body: 'bla bla '
// });

// const firebaseNotes = {
//   notes: {
//     ujffsj: {
//       title: 'First Note',
//       body: 'This is my note'
//     },
//     d4fsf: {
//       title: 'Another Note',
//       body: 'This is my note'
//     }
//   }
// };


// const onValueChange = (snapshot) => {
//   const data = snapshot.val();
//   const message = `${data.name} is a ${data.job.title} at ${data.job.company}`; 

//   console.log(message);
// }

// database.ref().on('value', onValueChange);

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log("Error ", e);
// });

// const onValueChange = (snapshot) => {
//   console.log(snapshot.val());
// }

// setTimeout(() => {
//   database.ref('name').set('Sicrano');
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 3500);

// setTimeout(() => {
//   database.ref('job/company').set('Google');
// }, 7000);




// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//    console.log('Err: ', error);
//   });


// database.ref().set({
//   name: 'Felipe',
//   age: 29,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   isSingle: false,
//   location: {
//     city: 'Campinas',
//     state: 'São Paulo',
//     country: 'Brasil'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((error) => {
//   console.log('Error: ', error);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city':'São Paulo'
// }).then(() => {
//   console.log('Data is updated');
// }).catch((error) => {
//   console.log('Error: ', error);
// });

//database.ref('isSingle').set(null);

// database.ref('location').remove()
//   .then(() => {
//    console.log('Data was deleted');
//   }).catch((e) => {
//    console.log('Error: ', error);
//   });