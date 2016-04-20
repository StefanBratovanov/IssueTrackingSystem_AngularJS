'use strict';

issueTracker.controller('ViewProjectController', function ($scope,
                                                           $routeParams,
                                                           $location,
                                                           authenticationService,
                                                           projectsService,
                                                           issuesService,
                                                           notifyService) {


        projectsService.getProjectById($routeParams.id,
            function success(data) {
                $scope.projectData = data;
            },
            function error(err) {
                notifyService.showError("Project loading failed", err);
            }
        );

        issuesService.getIssuesByProjectId(
            $routeParams.id,
            function success(data) {
                $scope.issuesData = data;
            },
            function error(err) {
                notifyService.showError("Issues loading failed", err);
            }
        )
    }
);