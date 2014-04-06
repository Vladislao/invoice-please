var filters = angular.module('filters', []);

filters.filter('inflection', function () {
    return function (number, titles) {
        var cases = [2, 0, 1, 1, 1, 2];
        return number + " " + titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    };
});