'use strict';

miniBus.service('CountryService', function ($http) {
    //save/update country
    this.save = function ($scope) {
        var dataObject = {
            "countryName": $scope.countryName
        };
        if ($scope.countryId != null) {
            dataObject = angular.extend(dataObject, {"id": $scope.countryId});
        }
        $http({
            method: 'POST',
            url: '/country/save',
            data: JSON.stringify(dataObject),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function success() {

            }, function error() {

            });
        this.resetCountryForm($scope);
        this.getCountries($scope);
    };

    //delete country
    this.delete = function ($scope, country) {
        $http({
            method: 'POST',
            url: '/country/delete',
            data: JSON.stringify(country),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function success() {

            }, function error() {

            });
        this.getCountries($scope);
    };

    //fetch all countries
    this.getCountries = function ($scope) {
        $http({
            method: 'GET',
            url: '/countries'
        })
            .then(function success(response) {
                $scope.countries = response.data;
            }, function error() {
                console.error('Error while fetching countries');
            });
    };

    //edit country. fill in country form
    this.fillInForm = function ($scope, country) {
        $scope.countryName = country.countryName.toString();
        $scope.countryId = country.id.toString();
    };

    //reset country form
    this.resetCountryForm = function ($scope) {
        $scope.countryId = null;
        $scope.countryName = null;
    };
});