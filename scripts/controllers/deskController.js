game.controller('DeskController', ["$rootScope", "$scope", "$modal", "botService", "dialogService", function ($rootScope, $scope, $modal, botService, dialogService) {

    var moveLeft = function (callback) {
        var id = botService.getCurrent().id;
        $('#' + id).animate({ left: "-=300" }, 2000, 'swing', callback);

        document.getElementsByTagName("audio")[1].play();
    };

    var moveRight = function () {
        var id = botService.getCurrent().id;

        document.getElementsByTagName("audio")[0].play();
        setTimeout(function () {
            $('#' + id).animate({ left: "+=300" }, 1500, 'swing', function () {
                $rootScope.isLoaded = true;
            });
        }, 1000);
    };

    $scope.next = function (result) {
        $rootScope.isLoaded = false;
        var last = botService.isLast();
        if (last) {
            botService.getCurrent().result.user = result;
            $rootScope.showResult = true;
        } else {
            moveLeft(function () {
                botService.getCurrent().result.user = result;
                dialogService.reset();
                moveRight();
            });
        }
    };

    $scope.showAbout = function () {
        $rootScope.showAbout = !$rootScope.showAbout;
    };

    $scope.showHelp = function () {
        $rootScope.showHelp = !$rootScope.showHelp;
    };

    $(function () {
        moveRight();
    });
}]);

game.controller('ResultController', ["$scope", "botService", function ($scope, botService) {
    $scope.getCount = function () {
        return botService.getCount();
    };
    $scope.getResult = function () {
        var bots = botService.getBots();
        var correct = 0;
        for (var i = 0; i < bots.length; ++i) {
            var bot = bots[i];
            correct += bot.result.user == bot.result.real ? 1 : 0;
        }
        return correct;
    };
    $scope.reload = function () {
        // хак для хэша
        window.location = window.location.href.replace(window.location.hash, "");
    };
}]);

game.controller('HelpController', ["$scope", "$rootScope", "helpService", function ($scope, $rootScope, helpService) {

    $('.spoiler-title').live('click', function () {
        var spoiler = $(this).parent('.spoiler');

        $('> .spoiler-text', spoiler).slideToggle();
        spoiler.toggleClass('spoiler-open');
    });

    $scope.helpItems = helpService.getHelpItems();

    $scope.closeHelp = function () {
        $rootScope.showHelp = false;
    };

    $scope.getIncludeFile = function (section) {
        return 'partials/help' + section.Id + '.html';
    };
}]);

