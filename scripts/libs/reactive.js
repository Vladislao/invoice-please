var app = angular.module('clock', []);

app.filter('pad', function() {
	return function(num) {
		return (num < 10 ? '0' + num : num);
	};
});

app.filter('addSuffix', function() {
	return function(num) {
		if (num % 100 >= 10 && num % 100 <= 19) {
			return num + 'th';
		}

		switch (num % 10) {
			case 1: return num + 'st';
			case 2: return num + 'nd';
			case 3: return num + 'rd';
		}

		return num + 'th';
	};
})

app.controller("ClockController", function($scope, $timeout) {
	$scope.date = new Date(1, 2, 3, 8);
	$scope.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	$scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	$scope.majors = new Array(12);
	$scope.minors = new Array(60);

	var tick = function() {
		$scope.date.setSeconds($scope.date.getSeconds() + 96);
		$timeout(tick, 1000);
	};
	$timeout(tick, 1000);
});