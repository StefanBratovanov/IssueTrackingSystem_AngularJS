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

    $scope.getProjectLeaderById = function (id) {
        issuesService.getProjectById(id,
            function success(data) {
                $scope.projectLeaderName = data.Lead.Username;
            },
            function error(err) {
                notifyService.showError("Project loading failed", err);
            }
        );
    };

    issuesService.getIssueById(
        $routeParams.id,
        function success(data) {
            $scope.issueData = data;
        },
        function error(err) {
            notifyService.showError("Issue loading failed", err);
        }
    );

    $scope.changeStatus = function (issueId, statusId) {
        issuesService.changeIssueStatus(issueId, statusId,
            function success(data) {
                $scope.issueData.AvailableStatuses = data;
            },
            function error(err) {
                notifyService.showError("Status change failed", err);
            }
        );
    };


});


