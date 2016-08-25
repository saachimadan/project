//connecting control.js to index.html
var myApp = angular.module("myApp", []);
myApp.controller("AppController", [ '$scope', '$http', function ($scope, $http){
	console.log("Hello World from controller");
	$http.get("/contactList").success(function(response){
		console.log("I got the data I requested");
		$scope.contactList = response;
	});

	
	//scope is the glue between application controller and the view(index.html file)

	//this allows us to use the contactList in the views which is index.html
	//$scope.contactList = contactList;


}]);


