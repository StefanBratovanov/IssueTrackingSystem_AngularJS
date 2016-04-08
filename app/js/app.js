'use strict';
var app = angular.module('IssueTrackingSystem', [
        'ngRoute',
        'ngResource',
        'ui.bootstrap.pagination'
    ])
    .constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net')
    .constant('pageSize', 2)
    .config(function ($routeProvider) {
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

