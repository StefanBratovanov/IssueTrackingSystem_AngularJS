'use strict';
// The AppController holds the presentation logic for the entire app (common for all screens)

issueTracker.controller('AppController', function ($scope,
                                                   $location,
                                                   authenticationService,
                                                   notifyService) {

        $scope.authenticationService = authenticationService;

        $scope.logout = function () {
            authenticationService.logout();
            notifyService.showInfo("Logout successful");
            $location.path('/');
        };
    }
);

