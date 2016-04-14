'use strict';

issueTracker.factory('projectsService', function ($http, baseServiceUrl, authenticationService) {
    return {
        getAllProjects: function (success, error) {
            var getAllProjectsRequest = {
                method: 'GET',
                url: baseServiceUrl + 'projects',
                headers: authenticationService.getAuthHeaders()
            };

            $http(getAllProjectsRequest).success(success).error(error);
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

        getLabels: function (success, error) {
            var getLabelsRequest = {
                method: 'GET',
                url: baseServiceUrl + 'labels/?filter=',
                headers: authenticationService.getAuthHeaders()
            };
            $http(getLabelsRequest).success(success).error(error);
        },

        isAdmin: function () {
            var currentUser = authenticationService.getCurrentUser();
            return (currentUser != undefined) && (currentUser.isAdmin);
        }

    }
});

//getLabels: function (label, success, error) {
//    var getLabelsRequest = {
//        method: 'GET',
//        url: baseServiceUrl + 'labels/?filter=' + label,
//        headers: authenticationService.getAuthHeaders()
//    };
//    $http(getLabelsRequest).success(success).error(error);
//}