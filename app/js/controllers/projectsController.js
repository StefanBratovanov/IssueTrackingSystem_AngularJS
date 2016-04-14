'use strict';

issueTracker.controller('ProjectsController', function ($scope,
                                                        $routeParams,
                                                        $location,
                                                        authenticationService,
                                                        projectsService,
                                                        notifyService,
                                                        usersService) {
    projectsService.getAllProjects(
        function success(data) {
            $scope.allProjects = data;
        },
        function error(err) {
            notifyService.showError("Projects loading failed", err);
        }
    );

    projectsService.getProjectById($routeParams.id,
        function success(data) {
            $scope.projectData = data;
        },
        function error(err) {
            notifyService.showError("Project loading failed", err);
        }
    );

    usersService.getAllUsers(
        function success(data) {
            $scope.users = data;
        },
        function error(err) {
            notifyService.showError("Project loading failed", err);
        }
    );


});

//function getProjectById(id) {
//    if (id) {
//        projectsService.getProjectById(id,
//            function success(data) {
//                $scope.projectData = data;
//            },
//            function error(err) {
//                notifyService.showError("Cannot load project", err);
//            }
//        );
//    }
//}
//
//getProjectById($routeParams.id);