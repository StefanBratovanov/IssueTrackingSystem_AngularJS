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

    issuesService.getIssueById($routeParams.id,
        function success(data) {
            $scope.issueData = data;
            console.log(data);
        },
        function error(err) {
            notifyService.showError("Issue loading failed", err);
        }
    );

    $scope.changeStatus = function (issueId, statusId, statusName) {
        issuesService.changeIssueStatus(issueId, statusId,
            function success(data) {
                $scope.issueData.AvailableStatuses = data;
                //$rootScope.$broadcast("statusSelectionChanged", statusId);
                $scope.$broadcast("statusSelectionChanged", statusName);
            },
            function error(err) {
                notifyService.showError("Status change failed", err);
            }
        );
    };

    $scope.$on("statusSelectionChanged", function (event, selectedStatus) {
        $scope.issueData.Status.Name = selectedStatus;

        $scope.getUserIssues();
    });

});

//$scope.getProjectLeaderById = function (id) {
//    issuesService.getProjectById(id,
//        function success(data) {
//            $scope.projectLeaderName = data.Lead.Username;
//        },
//        function error(err) {
//            notifyService.showError("Project loading failed", err);
//        }
//    );
//};

