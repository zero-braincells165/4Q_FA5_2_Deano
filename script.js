var contacts = [];

function updateContactsList() {
  var contactsList = document.getElementById("contactsList");
  contactsList.innerHTML = "<strong>Contacts:</strong><br>";
  for (var i = 0; i < contacts.length; i++) {
    contactsList.innerHTML += contacts[i] + "<br>";
  }
}

function addContact() {
  var nameInput = document.getElementById("nameInput").value;
  
  // Add new contact
  contacts.push(nameInput);
  
  // Remove first contact if the list exceeds 7 entries
  if (contacts.length > 7) {
    contacts.shift();
  }
  
  // Clear input field
  document.getElementById("nameInput").value = "";
  
  // Update contacts list
  updateContactsList();
}

function removeContact() {
  // Remove last contact
  contacts.pop();
  
  // Clear input field
  document.getElementById("nameInput").value = "";
  
  // Update contacts list
  updateContactsList();
}
