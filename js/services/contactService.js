angular.module("contactList").factory("contactService", function(serialGenerator){
	var _getContacts = function(){
		if (localStorage.getItem('contactList')){
			return JSON.parse(localStorage.getItem('contactList'));
		} else {
			return [{serial: serialGenerator.generate(), name: "Pedro Gomes Silva", phone: "9999-8888", carrier:{name:"Oi", code:"14"}},
					   {serial: serialGenerator.generate(), name: "Ana Luiza Romero", phone: "9999-7777", carrier:{name:"Vivo", code:"15"}},
					   {serial: serialGenerator.generate(), name: "Maria Pinheiro Martins ", phone: "9999-5555", carrier:{name:"Tim", code:"41"}}];
		}
	}

	var _saveContact = function(contact){
		var contactList = _getContacts();
		contactList.push(contact);
		localStorage.setItem('contactList', angular.toJson(contactList));
		return contactList;
	}

	var _deleteContacts = function(contacts){
		var contactList = contacts.filter(function(contact){
			if(!contact.selected) return contact;
		});

		localStorage.setItem('contactList', angular.toJson(contactList));
		return contactList;
	};

	return {
		getContacts: _getContacts,
		saveContact: _saveContact,
		deleteContacts: _deleteContacts
	}
})