'use strict';

issueTracker.controller('IssuesController', function ($scope,
                                                      $routeParams,
                                                      $location,
                                                      authenticationService,
                                                      projectsService,
                                                      notifyService,
                                                      issuesService,
                                                      pageSize) {
    $scope.projectParams = {
        'startPage': 1,
        'pageSize': pageSize
    };

    $scope.getUserIssues = function () {
        issuesService.getUserIssues($scope.projectParams,
            function success(data) {
                $scope.userIssues = data.Issues;
            },
            function error(err) {
                notifyService.showError("Issues loading failed", err);
            }
        );
    };

    $scope.getUserIssues();


});


