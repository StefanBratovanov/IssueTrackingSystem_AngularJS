'use strict';

issueTracker.controller('AuthenticationController', function ($scope,
                                                              $location,
                                                              authenticationService,
                                                              projectsService,
                                                              notifyService) {
    $scope.login = function (userData) {
        authenticationService.login(userData,
            function success() {
                notifyService.showInfo("Login successful");
                $location.path("/");
            },
            function error(err) {
                notifyService.showError("Login failed", err);
            });
    };

    $scope.register = function (userData) {
        authenticationService.register(userData,
            function success() {
                notifyService.showInfo("User registration successful");
                $location.path("/");
            },
            function error(err) {
                notifyService.showError("User registration failed. " + err.Message);
            }
        );
    };

    $scope.setProjectKey = function (projectName) {
        var tokens = projectName.split(' ');
        var result = "";
        tokens.forEach(function (element) {
            result += element.substring(0, 1)
        });

        $scope.projectKey = result;
    }
});