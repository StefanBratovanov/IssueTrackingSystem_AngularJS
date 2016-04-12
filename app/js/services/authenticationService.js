'use strict';

issueTracker.factory('authenticationService', function ($http, baseServiceUrl) {
    return {
        register: function (userData, success, error) {
            var request = {
                method: 'POST',
                url: baseServiceUrl + 'api/account/register',
                data: userData
            };

            $http(request).success(function (responseData) {
                sessionStorage['currentUser'] = JSON.stringify(responseData);
                success(responseData);
            }).error(error);
        },

        login: function (userData, success, error) {
            var request = {
                method: 'POST',
                url: baseServiceUrl + 'api/token',
                data: 'grant_type=password&username=' + userData.username + '&password=' + userData.password,
                headers: {
                    ContentType: "application/x-www-form-urlencoded"
                }
            };

            $http(request).success(function (responseData) {
                var userData = responseData;

                var userDataRequest = {
                    method: 'GET',
                    url: baseServiceUrl + '/users/me',
                    headers: {Authorization: 'Bearer ' + userData.access_token}
                };

                $http(userDataRequest).success(function (data) {
                    userData.isAdmin = data.isAdmin;
                    sessionStorage['currentUser'] = JSON.stringify(userData);
                    success(data);

                }).error(error);

            }).error(error);
        },

        logout: function () {
            delete sessionStorage['currentUser'];
        }
    }
});