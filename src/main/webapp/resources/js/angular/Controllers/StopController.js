miniBus.controller('StopController', function ($scope, $http, StopService, CityService, GlobalService) {

    //fetch all stops
    $scope.getStops = function () {
        StopService.getStops($scope)
            .then(
                function (response) {
                    $scope.stops = response;
                });
    };

    //save/update stop
    $scope.submitStopForm = function () {
        StopService.save(
            {
                "id": $scope.stopId,
                "title": $scope.title,
                "street": $scope.street,
                "building": $scope.building,
                "city": $scope.selectedCity
            }
        )
            .then(
                function () {
                    $scope.getStops();
                    $scope.resetStopForm();
                });
    };

    //delete stop
    $scope.deleteStop = function (stop) {
        StopService.delete(stop)
            .then(
                function () {
                    $scope.getStops();
                });
    };

    //edit stop. fill in stop form
    $scope.editStop = function (stop) {
        $scope.stopId = stop.id.toString();
        $scope.title = stop.title.toString();
        $scope.street = stop.street.toString();
        $scope.building = stop.building.toString();
        $scope.selectedCity = stop.city;
        $scope.cities[GlobalService.getIndex($scope.cities, stop.city)] = stop.city;
    };

    //reset stop form
    $scope.resetStopForm = function () {
        $scope.stopId = null;
        $scope.title = null;
        $scope.street = null;
        $scope.building = null;
        $scope.selectedCity = null;
    };

    //fetch all cities
    $scope.getCities = function () {
        CityService.getCities($scope)
            .then(
                function (response) {
                    $scope.cities = response;
                });
    };
});