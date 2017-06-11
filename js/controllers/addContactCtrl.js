angular.module("contactList").controller("addContactCtrl", function ($scope, contactService, carrierService, serialGenerator, $location){
	
	$scope.carriers = carrierService.getCarriers();

	$scope.addContact = function(contact){
		contact.serial = serialGenerator.generate();
		$scope.contacts = contactService.saveContact(contact);
		$location.path('/contacts');
	};

	$scope.isNewContactFilled = function(contact){
		if (contact) {
			return (contact.name && contact.phone && contact.carrier);
		} 
		
		return false;
	};
});