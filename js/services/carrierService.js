angular.module("contactList").service("carrierService", function(){
	this.getCarriers = function(){
		return [{name: "Oi", code:"14", category:"Cellphone"},
						{name: "Vivo", code:"15", category:"Cellphone"},
						{name: "Tim", code:"41", category:"Cellphone"},
						{name: "Claro", code:"17", category:"Cellphone"},
						{name: "GVT", code:"17", category:"Base"},
						{name: "Net", code:"17", category:"Base"}];
	}

})