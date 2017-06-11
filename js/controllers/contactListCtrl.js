angular.module("contactList").controller("contactListCtrl", function ($scope, contactService, carrierService){
	
	$scope.appName = "Contact List";
	$scope.selected = "selected";
	$scope.orderByCriteria = "name";
	$scope.contacts = contactService.getContacts();

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