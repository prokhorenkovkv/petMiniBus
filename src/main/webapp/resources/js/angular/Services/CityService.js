'use strict';

miniBus.service('CityService', function ($http, GlobalService) {
    //save/update city
    this.save = function ($scope) {
        var dataObject = {
            "zipCode": $scope.zipCode,
            "cityName": $scope.cityName,
            "country": $scope.selectedCountry
        };
        if ($scope.cityId != null) {
            dataObject = angular.extend(dataObject, {"id": $scope.cityId});
        }
        $http({
            method: 'POST',
            url: '/city/save',
            data: JSON.stringify(dataObject),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function success() {

            }, function error() {

            });
        this.resetCityForm($scope);
        this.getCities($scope);
    };

    //delete city
    this.delete = function ($scope, city) {
        $http({
            method: 'POST',
            url: '/city/delete',
            data: JSON.stringify(city),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function success() {

            }, function error() {

            });
        this.getCities();
    };

    //fetch all cities
    this.getCities = function ($scope) {
        $http({
            method: 'GET',
            url: '/cities'
        })
            .then(function success(response) {
                $scope.cities = response.data;
            }, function error() {

            });
    };
    
    //edit city. fill in city form
    this.fillInForm = function ($scope, city) {
        if ($scope.countries[0] == null) {
            $scope.countries.shift();
        }
        $scope.cityId = city.id.toString();
        $scope.cityName = city.cityName.toString();
        $scope.zipCode = city.zipCode.toString();
        $scope.selectedCountry = city.country;
        $scope.countries.unshift(null);
        $scope.countries[GlobalService.getIndex($scope.countries, city.country)] = city.country;
    };

    //reset city form
    this.resetCityForm = function ($scope) {
        $scope.cityId = null;
        $scope.cityName = null;
        $scope.zipCode = null;
        $scope.selectedCountry = null;
    };
});