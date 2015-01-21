var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, mainService) {

	$scope.allQuotes = mainService.getData();

	

	$scope.addData = function() {
		var object = {
			text: $scope.newQuote,
			author: $scope.newAuthor
		};
		mainService.addData(object);		
		$scope.newQuote = '';
		$scope.newAuthor = '';
	};

	$scope.removeData = function() {
		mainService.removeData($scope.trashQuote);
	};


	$scope.toggleAdd = false;
	$scope.toggleRemove = false;
	$scope.toggleFilter = false;

	$scope.toggleAddSwitch = function() {
		$scope.toggleAdd = !$scope.toggleAdd;
		$scope.toggleRemove = false;
		$scope.toggleFilter = false;
	};

	$scope.toggleRemoveSwitch = function() {
		$scope.toggleRemove = !$scope.toggleRemove;
		$scope.toggleAdd = false;
		$scope.toggleFilter = false;
	};

	$scope.toggleFilterSwitch = function() {
		$scope.toggleFilter = !$scope.toggleFilter;
		$scope.toggleAdd = false;
		$scope.toggleRemove = false;
	};









});