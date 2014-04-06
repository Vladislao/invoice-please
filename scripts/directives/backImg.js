game.directive('backImg', function () {
    return function (scope, element, attrs) {
        var url = attrs.backImg;
        element.css({
            'background': 'url(' + url + ')',
        });
    };
});