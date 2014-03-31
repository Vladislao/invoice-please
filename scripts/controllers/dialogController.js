game.controller('DialogController', ["$scope", "dialogService", function($scope, dialogService){
	
	$scope.dialogData = dialogService.get();

	$scope.ask = function(message){
		dialogService.ask(message);
	};

	$scope.reset = function(){
		dialogService.reset();
	};

}]);