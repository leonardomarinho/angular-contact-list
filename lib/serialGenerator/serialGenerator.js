angular.module("serialGenerator", []);
angular.module("serialGenerator").provider("serialGenerator", function(){
	var serialLength = 10;
	
	this.getSerialLength = function(){
		return serialLength;
	}

	this.setSerialLength = function(length){
		serialLength = length;
	}

	this.$get = function(){
		return{
			//Randomly generates a serial
			generate: function(){
				var serial = "";
				while(serial.length < serialLength){
					serial += String.fromCharCode(Math.floor(Math.random() * 64 + 32));
				}
				return serial;
			}
		};
	};
});