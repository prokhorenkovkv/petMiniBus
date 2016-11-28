'use strict';

miniBus.service('StopService', function ($http, GlobalService) {
    //save/update stop
    this.save = function ($scope) {
        var dataObject = {
            "title": $scope.title,
            "street": $scope.street,
            "building": $scope.building,
            "city": $scope.selectedCity
        };
        if ($scope.stopId != null) {
            dataObject = angular.extend(dataObject, {"id": $scope.stopId});
        }
        $http({
            method: 'POST',
            url: '/stop/save',
            data: JSON.stringify(dataObject),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function success() {

            }, function error() {

            });
        this.resetStopForm($scope);
        this.getStops($scope);
    };

    //delete stop
    this.delete = function ($scope, stop) {
        $http({
            method: 'POST',
            url: '/stop/delete',
            data: JSON.stringify(stop),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function success() {

            }, function error() {

            });
        this.getStops($scope);
    };

    //fetch all stops
    this.getStops = function ($scope) {
        $http({
            method: 'GET',
            url: '/stops'
        })
            .then(function success(response) {
                $scope.stops = response.data;
            }, function error(response) {

            });
    };
    
    //edit stop. fill in stop form
    this.fillInForm = function ($scope, stop) {
        if ($scope.cities[0] == null) {
            $scope.cities.shift();
        }
        $scope.stopId = stop.id.toString();
        $scope.title = stop.title.toString();
        $scope.street = stop.street.toString();
        $scope.building = stop.building.toString();
        $scope.selectedCity = stop.city;
        $scope.cities.unshift(null);
        $scope.cities[GlobalService.getIndex($scope.cities, stop.city)] = stop.city;
    };
    
    //reset stop form
    this.resetStopForm = function ($scope) {
        $scope.stopId = null;
        $scope.title = null;
        $scope.street = null;
        $scope.building = null;
        $scope.selectedCity = null;
    };
});