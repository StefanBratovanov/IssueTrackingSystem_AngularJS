'use strict';

issueTracker.controller('ViewProjectController', function ($scope,
                                                           $routeParams,
                                                           $location,
                                                           authenticationService,
                                                           projectsService,
                                                           notifyService) {


        projectsService.getProjectById($routeParams.id,
            function success(data) {
                $scope.projectData = data;
            },
            function error(err) {
                notifyService.showError("Project loading failed", err);
            }
        );
    }
);