issueTracker.factory('autoCompleteDataService', [function (projectsService) {
    return {
        gettLabels : projectsService.getLabels()
    }
}]);