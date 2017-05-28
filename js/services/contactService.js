angular.module("contactList").factory("contactService", function(serialGenerator){
	var contactList = [{serial: serialGenerator.generate(), name: "Pedro", phone: "9999-8888", carrier:{name:"Oi", code:"14"}},
					   {serial: serialGenerator.generate(), name: "Ana", phone: "9999-7777", carrier:{name:"Vivo", code:"15"}},
					   {serial: serialGenerator.generate(), name: "Maria", phone: "9999-5555", carrier:{name:"Tim", code:"41"}}];

	var _getContacts = function(){
		return contactList
	}

	var _saveContact = function(contact){
		contactList.push(contact);
		return contactList;
	}

	var _deleteContacts = function(contacts){
		contactList = contacts.filter(function(contact){
			if(!contact.selected) return contact;
		});

		return contactList;
	};

	return {
		getContacts: _getContacts,
		saveContact: _saveContact,
		deleteContacts: _deleteContacts
	}
})