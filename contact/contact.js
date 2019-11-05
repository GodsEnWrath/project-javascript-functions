// Experiments to store people's names
const names = ["jono Avalon", "holo Brave", "yuyu Gacurio"];

// Experiments to manage the names
const showNames = names => {
  // loop over the names array
  for (let index = 0; index < names.length; index++) {
    // name and names are different
    const name = names[index];

    // log the name and index at the same time
    console.log(`[${index + 1}] ${name}`);
  }
};

// execute or call the function
showNames(names);

////////////////////////////////////////////////////////////////
// FILTER NAME

const names = ["jono Avalon", "holo Brave", "yuyu Gacurio"];

const filterNames = (names, minimumLength) => {
  let newNames = [];

  for (let index = 0; index < names.length; index++) {
    const name = names[index];

    if (name.length >= minimumLength) {
      newNames.push(name);
    }
  }

  // return the filtered names
  return newNames;
};

// filteredNames and filterNames are different
const filteredNames = filterNames(names, 12); // [ 'jono Avalon', 'yuyu Gacurio' ]

showNames(filteredNames);

///////////////////////////////////////////

// ARRAY OF ABJECT

const myContacts = [
  {
    id: 1,
    name: "jono Avalon",
    phone: "+1 111 101010",
    email: "jono@avalon.org",
    favorite: true,
    rating: 9,
    tags: ["popular", "cool"]
  },
  {
    id: 2,
    name: "holo Brave",
    phone: "+62 812 242424",
    email: "holo@braverian.com"
  },
  {
    id: 3,
    name: "yuyu Gacurio",
    phone: "+63 813 363636",
    email: "yuyu@gacurio.dev"
  }
];
//SHOW CONTACT
const showContacts = contacts => {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];
    console.log(
      `[${contact.id}] ${contact.name} (${contact.phone}) <${contact.email}>`
    );
  }
};
//call show contact
showContacts(myContacts);

//FILTER CONTACT
const filterContacts = (contacts, minimumNameLength) => {
  let newContacts = [];

  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];

    if (contact.name.length >= minimumNameLength) {
      newContacts.push(contact);
    }
  }

  return newContacts;
};

//call filtercontact
const filteredContacts = filterContacts(myContacts, 12);

showContacts(filteredContacts);

/// JANGAN LUPA JADIIN COMMENT SELAIN SECTION YG DIPILIH
//https://gitlab.com/impactbyte/learn/course-fullstackweb/blob/master/chapters/projects/project-contacts-console.md
