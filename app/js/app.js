'use strict';
var app = angular.module('IssueTrackingSystem', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination']);
app.constant('baseServiceUrl', 'http://softuni-issue-tracking-system.azurewebsites.net');
app.constant('pageSize', 2);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });

    
    $routeProvider.otherwise(
        {
            redirectTo: '/'
        }
    );
});

