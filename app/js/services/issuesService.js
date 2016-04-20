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

        getUserIssues: function (params, success, error) {
            var getUserIssuesRequest = {
                method: 'GET',
                url: baseServiceUrl + 'issues/me?orderBy=Project.Name desc,IssueKey&pageSize=' + params.pageSize + '&pageNumber=' + params.startPage,
                headers: authenticationService.getAuthHeaders()
            };

            $http(getUserIssuesRequest).success(success).error(error);
        },

        getProjectById: function (id, success, error) {
            if (id) {
                var getProjectRequest = {
                    method: 'GET',
                    url: baseServiceUrl + 'projects/' + id,
                    headers: authenticationService.getAuthHeaders()
                };
                $http(getProjectRequest).success(success).error(error);
            }
        },

        getIssuesByProjectId: function (id, success, error) {
            if (id) {
                var getIssuesRequest = {
                    method: 'GET',
                    url: baseServiceUrl + 'projects/' + id + '/issues',
                    headers: authenticationService.getAuthHeaders()
                };
                $http(getIssuesRequest).success(success).error(error);
            }
        },

        getIssueById: function (id, success, error) {
            if (id) {
                var getIssueRequest = {
                    method: 'GET',
                    url: baseServiceUrl + 'issues/' + id,
                    headers: authenticationService.getAuthHeaders()
                };
                $http(getIssueRequest).success(function (response) {
                    var issueData = response;
                    var projectId = response.Project.Id;

                    var getProjectDataRequest = {
                        method: 'GET',
                        url: baseServiceUrl + 'projects/' + projectId,
                        headers: authenticationService.getAuthHeaders()
                    };

                    $http(getProjectDataRequest).success(function (response) {
                        issueData.projectLeaderName = response.Lead.Username;
                        success(issueData);
                    }).error(error);
                }).error(error);

            }
        },

        changeIssueStatus: function (issueId, statusId, success, error) {
            if (issueId && statusId) {
                var changeStatusRequest = {
                    method: 'PUT',
                    url: baseServiceUrl + 'issues/' + issueId + '/changestatus?statusId=' + statusId,
                    headers: authenticationService.getAuthHeaders()
                };
                $http(changeStatusRequest).success(success).error(error);
            }
        }
    }
});


