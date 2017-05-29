angular.module("contactList").filter("formatName", function(){
	return function(input){
		namesArray = input.split(" ");
		return namesArray.map(function(name){
			return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
		}).join(" ");

	}
});