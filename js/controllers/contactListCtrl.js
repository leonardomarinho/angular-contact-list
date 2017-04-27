angular.module("contactList").controller("contactListCtrl", function ($scope){
	
	$scope.appName = "Contact List";
	$scope.selected = "selected";
	$scope.orderByCriteria = "name";
	$scope.contacts = [{name: "Pedro", phone: "9999-8888", carrier:{name:"Oi", code:"14"}},
					   {name: "Ana", phone: "9999-7777", carrier:{name:"Vivo", code:"15"}},
					   {name: "Maria", phone: "9999-5555", carrier:{name:"Tim", code:"41"}}];

	$scope.carriers = [{name: "Oi", code:"14", category:"Cellphone"},
						{name: "Vivo", code:"15", category:"Cellphone"},
						{name: "Tim", code:"41", category:"Cellphone"},
						{name: "Claro", code:"17", category:"Cellphone"},
						{name: "GVT", code:"17", category:"Base"},
						{name: "Net", code:"17", category:"Base"}];

	$scope.addContact = function(contact){
		$scope.contacts.push(angular.copy(contact));
		delete $scope.contact;
		$scope.contactForm.$setPristine();
	};

	$scope.isNewContactFilled = function(contact){
		if (contact) {
			return (contact.name && contact.phone && contact.carrier);
		} 
		
		return false;
	};

	$scope.deleteContacts = function(contacts){
		$scope.contacts = contacts.filter(function(contact){
			if(!contact.selected) return contact;
		});
	};

	$scope.isContactsSelected = function(contacts){
		return contacts.some(function(contact){
			return contact.selected;
		});
	};

	$scope.orderBy = function(criteria){
		$scope.orderByCriteria = criteria;	
		$scope.direction = !$scope.direction;
	}
});