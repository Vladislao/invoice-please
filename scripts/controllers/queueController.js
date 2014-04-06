game.controller('QueueController', ["$scope", "botService", function ($scope, botService) {
	$scope.bots = botService.getBots();
}]);