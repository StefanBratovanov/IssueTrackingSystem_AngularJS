'use strict';

issueTracker.controller('AuthenticationController', function ($scope, $rootScope, $location, authenticationService, notifyService) {
    $scope.login = function (userData) {
        authenticationService.login(userData,
            function success() {
                notifyService.showInfo("Login successful");
                $location.path("dashboard");
            },
            function error(err) {
                notifyService.showError("Login failed", err);
            });
    };

    $scope.register = function (userData) {
        authenticationService.register(userData,
            function success() {
                notifyService.showInfo("User registered successfully");
                $location.path("dashboard");
            },
            function error(err) {
                notifyService.showError("User registration failed", err);
            }
        );
    };
});