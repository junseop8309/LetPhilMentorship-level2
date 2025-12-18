// HOMEWORK — SIMPLE CONTACT CARD
// -----------------------------------------------

// STEP 1: Create an array called contacts.
//         It should contain at least 2 objects.

// STEP 2: Each contact object needs:
//         name (string)
//         phone (string or number)
//         isFavorite (boolean)

// STEP 3: Log the total number of contacts.

// STEP 4: Log the name of the first contact.

// STEP 5: Update one contact’s isFavorite value.

// STEP 6: Add (push) a new contact object.

// STEP 7: Log the updated contacts array.

let contacts = [
  {name: "James", phone: "123-456-78", isFavorite: false},
  {name: "Park", phone: "876-543-21", isFavorite: true}
];

console.log(contacts.length);
console.log(contacts[0].name);

contacts[0].isFavorite = true;
contacts.push({name: "Hoho", phone: "817-263-54", isFavorite: false});

contacts.forEach((contact, idx) =>{
  console.log(`Contact number ${idx + 1}
Name: ${contact.name}
phone: ${contact.phone}
isFavorite: ${contact.isFavorite}`);
});

