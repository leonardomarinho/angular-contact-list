angular.module("contactList").config(function($routeProvider){
	
	$routeProvider.when('/contacts', {
		templateUrl: 'views/contactList.html',
		controller: 'contactListCtrl'
	});

	$routeProvider.when('/newContact', {
		templateUrl: 'views/form.html',
		controller: 'addContactCtrl'
	});


	$routeProvider.otherwise({
		redirectTo: '/contacts'
	});

});