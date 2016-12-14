'use strict';

miniBus.controller('StopController', function ($scope,
                                               $http,
                                               StopService,
                                               CityService,
                                               CountryService,
                                               GlobalService) {
    //fetch all stops
    $scope.getStops = function () {
        StopService.getStops()
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
        var country = stop.city.country;
        var city = stop.city;
        CityService.getCitiesByCountry(country)
            .then(
                function (response) {
                    $scope.stopId = stop.id.toString();
                    $scope.title = stop.title.toString();
                    $scope.street = stop.street.toString();
                    $scope.building = stop.building.toString();
                    
                    $scope.selectedCountry = country;
                    $scope.countries[GlobalService.getIndex($scope.countries, country)] = country;

                    $scope.cities = response;
                    $scope.selectedCity = city;
                    $scope.cities[GlobalService.getIndex($scope.cities, city)] = city;
                });
    };

    //reset stop form
    $scope.resetStopForm = function () {
        $scope.stopId = null;
        $scope.title = null;
        $scope.street = null;
        $scope.building = null;
        $scope.selectedCountry = null;
        $scope.cities = null;
        $scope.selectedCity = null;
    };

    //fetch all countries
    $scope.getCountries = function () {
        CountryService.getCountries()
            .then(
                function (response) {
                    $scope.countries = response;
                });
    };

    //fetch cities by country
    $scope.getCitiesByCountry = function () {
        CityService.getCitiesByCountry($scope.selectedCountry)
            .then(
                function (response) {
                    $scope.cities = response;
                });
    };
});