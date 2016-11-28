miniBus.controller('StopController', function ($scope, $http, StopService, CityService) {
    //save/update stop
    $scope.submitStopForm = function () {
        StopService.save($scope);
    };

    //delete stop
    $scope.deleteStop = function (stop) {
        StopService.delete($scope, stop);
    };

    //edit stop. fill in stop form
    $scope.editStop = function (stop) {
        StopService.fillInForm($scope, stop)
    };

    //fetch all stops
    $scope.getStops = function () {
        StopService.getStops($scope);
    };
    
    //fetch all cities
    $scope.getCities = function () {
        CityService.getCities($scope);
    };
});