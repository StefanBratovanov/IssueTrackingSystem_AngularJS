issueTracker.factory('projectsService', function ($http, baseServiceUrl, authenticationService) {
    return {
        getAllProjects: function (success, error) {
            var getAllProjectsRequest = {
                method: 'GET',
                url: baseServiceUrl + 'projects',
                headers: authenticationService.getAuthHeaders()
            };

            $http(getAllProjectsRequest).success(success).error(error);
        }
    }
});