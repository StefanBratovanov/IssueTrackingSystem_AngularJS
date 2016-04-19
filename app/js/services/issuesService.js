'use strict';

issueTracker.factory('issuesService', function ($http, baseServiceUrl, authenticationService) {
    return {
        addNewIssue: function (issueData, success, error) {
            var addIssueRequest = {
                method: 'POST',
                url: baseServiceUrl + 'issues',
                headers: authenticationService.getAuthHeaders(),
                data: issueData
            };

            $http(addIssueRequest).success(success).error(error);
        },

        getAllIssues: function (success, error) {
            var getAllProjectsRequest = {
                method: 'GET',
                url: baseServiceUrl + 'projects',
                headers: authenticationService.getAuthHeaders()
            };

            $http(getAllProjectsRequest).success(success).error(error);
        },
    }
});