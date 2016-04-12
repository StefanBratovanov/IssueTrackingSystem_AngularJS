'use strict';

issueTracker.factory('authenticationService', function ($http, baseServiceUrl) {
    return {
        register: function (userRegisterData, success, error) {
            var request = {
                method: 'POST',
                url: baseServiceUrl + 'api/account/register',
                data: userRegisterData
            };

            $http(request).success(function (response) {
                var getTokenRequest = {
                    method: 'POST',
                    url: baseServiceUrl + 'api/token',
                    data: 'grant_type=password&username=' + userRegisterData.email + '&password=' + userRegisterData.password,
                    headers: {
                        ContentType: "application/x-www-form-urlencoded"
                    }
                };

                $http(getTokenRequest).success(function (response) {
                    var userData = response;
                    userData.isAdmin = false;
                    sessionStorage['currentUser'] = JSON.stringify(userData);
                    success(response);
                }).error(error);
            });
        },

        login: function (userLoginData, success, error) {
            var getTokenRequest = {
                method: 'POST',
                url: baseServiceUrl + 'api/token',
                data: 'grant_type=password&username=' + userLoginData.username + '&password=' + userLoginData.password,
                headers: {
                    ContentType: "application/x-www-form-urlencoded"
                }
            };

            $http(getTokenRequest).success(function (response) {
                var userData = response;

                var userDataRequest = {
                    method: 'GET',
                    url: baseServiceUrl + '/users/me',
                    headers: {Authorization: 'Bearer ' + userData.access_token}
                };

                $http(userDataRequest).success(function (response) {
                    userData.isAdmin = response.isAdmin;
                    sessionStorage['currentUser'] = JSON.stringify(userData);
                    success(response);
                }).error(error);
            }).error(error);
        },

        logout: function () {
            delete sessionStorage['currentUser'];
        }
    }
});