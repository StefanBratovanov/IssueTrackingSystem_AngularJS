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
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/projects/' + id,
                    headers: authenticationService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            }
        }
    }
});