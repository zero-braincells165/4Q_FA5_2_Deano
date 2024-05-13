var contacts = [];

function updateContactsList() {
  var contactsList = document.getElementById("contactsList");
  contactsList.innerHTML = "<strong>Contacts:</strong> " + contacts.join(", ");
}

function addContact() {
  var nameInput = document.getElementById("nameInput").value.trim();
  
  // Add new contact
  if (nameInput !== "") {
    contacts.push(nameInput);
  
    // Remove first contact if the list exceeds 7 entries
    if (contacts.length > 7) {
      contacts.shift();
    }
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
