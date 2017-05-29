angular.module("contactList").filter("ellipsis", function(){
	return function(input, maxSize){
		maxSize = (maxSize || 10);
		if (input.length > maxSize){
			return input.substring(0, maxSize) + "..."
		} 
		return input;
	};
});