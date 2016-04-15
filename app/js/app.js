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

        $routeProvider.when('/user/profile', {
            templateUrl: 'templates/user/edit-password.html',
            controller: 'UserEditProfileController'
        });

        $routeProvider.when('/projects', {
            templateUrl: 'templates/projects/all-projects.html',
            controller: 'ProjectsController'
        });

        $routeProvider.when('/projects/add', {
            templateUrl: 'templates/projects/add-new-project.html',
            controller: 'AdminController'
        });

        $routeProvider.when('/projects/:id', {
            templateUrl: 'templates/projects/project-page.html',
            controller: 'ProjectsController'
        });

        $routeProvider.when('/projects/:id/add-issue', {
            templateUrl: 'templates/user/add-new-issue.html',
            controller: 'ProjectsController'
        });



        $routeProvider.otherwise(
            {
                redirectTo: '/'
            }
        );
    });

issueTracker.run(function ($rootScope, $location, authenticationService) {
    $rootScope.$on('$locationChangeStart', function (event) {
        if (!authenticationService.isLoggedIn()) {
            // Authorization check: anonymous site visitors cannot access user routes
            $location.path("/");
        }
    });
});

