'use strict';

issueTracker.controller('projectsController', function ($scope, $location, authenticationService, projectsService, notifyService) {
    projectsService.getAllProjects(
        function success(data) {
            //console.log(data);
            $scope.allProjects = data;
        },
        function error(err) {
            notifyService.showError("Projects loading failed", err);
        }
    );
});