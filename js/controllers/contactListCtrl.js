angular.module("contactList").controller("contactListCtrl", function ($scope, contactService, carrierService, serialGenerator){
	
	$scope.appName = "Contact List";
	$scope.selected = "selected";
	$scope.orderByCriteria = "name";
	$scope.contacts = contactService.getContacts();
	$scope.carriers = carrierService.getCarriers();

	$scope.addContact = function(contact){
		contact.serial = serialGenerator.generate();
		$scope.contacts = contactService.saveContact(contact);
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
		$scope.contacts = contactService.deleteContacts(contacts);
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