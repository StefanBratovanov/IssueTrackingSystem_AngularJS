'use strict';
var issueTracker = angular.module('IssueTrackingSystem', [
        'ngRoute',
        'ngResource',
        'ui.bootstrap.pagination'
    ])
    .constant('baseServiceUrl', 'http://softuni-issue-tracker.azurewebsites.net/')
    .constant('pageSize', 2)
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/user/dashboard.html',
            controller: 'AuthenticationController'
        });

        $routeProvider.when('/user/profile',{
            templateUrl: 'templates/user/edit-password.html',
            controller: 'userEditProfileController'
        });

        $routeProvider.otherwise(
            {
                redirectTo: '/'
            }
        );
    });

