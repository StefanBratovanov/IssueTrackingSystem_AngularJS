'use strict';

issueTracker.controller('AdminController', function ($scope,
                                                     $routeParams,
                                                     $location,
                                                     authenticationService,
                                                     projectsService,
                                                     usersService,
                                                     notifyService) {
    if (!authenticationService.isAdmin()) {
        $location.path("/");
    }

    usersService.getAllUsers(
        function success(data) {
            $scope.users = data;
        },
        function error(err) {
            notifyService.showError("Project loading failed", err);
        }
    );


    $scope.searchChar = '';
    $scope.autoComplete = function () {
        projectsService.getLabels(
            function success(data) {
                $scope.labelsList = [];
                data.forEach(function (label) {
                    $scope.labelsList.push(label.Name)
                });

                $scope.labelsList = $scope.labelsList.filter(function (e) {
                    return e.indexOf($scope.searchChar) !== -1;
                });
            },
            function error(err) {
                notifyService.showError("labels loading failed", err);
            });
    };

});


//$scope.getLabels = function (label) {
//    projectsService.getLabels(label,
//        function success(data) {
//            var labelsNames = [];
//            data.forEach(function (element) {
//                labelsNames.push(element.Name)
//            });
//
//            $scope.labels = labelsNames;
//            //console.log(labelsNames);
//        },
//        function error(err) {
//            notifyService.showError("labels loading failed", err);
//        });
//};


//$scope.getlabelsList = function () {
//    projectsService.getLabels(
//        function success(data) {
//            var labelsNames = [];
//            data.forEach(function (element) {
//                labelsNames.push(element.Name)
//            });
//
//            $scope.labelsList = labelsNames;
//            //console.log(labelsNames);
//        },
//        function error(err) {
//            notifyService.showError("labels loading failed", err);
//        });
//};