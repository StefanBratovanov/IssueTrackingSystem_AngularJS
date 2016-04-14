issueTracker.filter('firstLetters', function () {
    return function (input, scope) {
        if (input != null) {
            input = input.split(' ');
            var result = "";
            input.forEach(function (element) {
                result += element.substring(0, 1)
            });

            return result;
        }
    }
});