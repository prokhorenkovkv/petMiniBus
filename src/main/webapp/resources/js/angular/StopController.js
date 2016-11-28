miniBus.controller('StopController', function ($scope, $http) {

    $scope.submitStopForm = function () {
        var dataObject = {
            "title": $scope.title,
            "street": $scope.street,
            "building": $scope.building,
            "city": $scope.selectedCity
        };
        if ($scope.stopId != null) {
            dataObject = angular.extend(dataObject, {"id": $scope.stopId});
        };
        $http({
            method: 'POST',
            url: '/stop/save',
            data: JSON.stringify(dataObject),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function success() {

            }, function error() {

            });
        $scope.resetStopForm();
        $scope.getStops();
    };

    //delete stop
    $scope.deleteStop = function (stop) {
        $http({
            method: 'POST',
            url: '/stop/delete',
            data: JSON.stringify(stop),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function success() {

            }, function error() {

            });
        $scope.getStops();
    };

    //edit stop. fill in stop form
    $scope.editStop = function (stop) {
        if ($scope.cities[0] == null) {
            $scope.cities.shift();
        };
        $scope.stopId = stop.id.toString();
        $scope.title = stop.title.toString();
        $scope.street = stop.street.toString();
        $scope.building = stop.building.toString();
        $scope.selectedCity = stop.city;
        $scope.cities.unshift(null);
        $scope.cities[$scope.getIndex($scope.cities, stop.city)] = stop.city;
    };

    $scope.getIndex = function (countries, selectedCountry) {
        for(i = 1; i < countries.length; i++) {
            if(countries[i].id == selectedCountry.id) {
                return i;
            };
        };
    };

    //fetch all cities
    $scope.getCities = function () {
        $http({
            method: 'GET',
            url: '/cities'
        })
            .then(function success(response) {
                $scope.cities = response.data;
            }, function error() {

            });
    };

    //fetch all stops
    $scope.getStops = function () {
        $http({
            method: 'GET',
            url: '/stops'
        })
            .then(function success(response) {
                $scope.stops = response.data;
            }, function error(response) {

            });
    };

    //reset stop form
    $scope.resetStopForm = function () {
        $scope.stopId = null;
        $scope.title = null;
        $scope.street = null;
        $scope.building = null;
        $scope.selectedCity = null;
    };
});