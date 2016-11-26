miniBus.controller('CityController', function ($scope, $http) {
    
    $scope.submitCityForm = function () {
        console.log($scope.selectedCountry);
        var dataObject = {
            "zipCode": $scope.zipCode,
            "cityName": $scope.cityName,
            "country": $scope.selectedCountry
        };
        if ($scope.cityId != null) {
            dataObject = angular.extend(dataObject, {"id": $scope.cityId});
        };
        $http({
            method: 'POST',
            url: '/city/save',
            data: JSON.stringify(dataObject),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function success() {

            }, function error() {

            });
        $scope.resetCityForm();
        $scope.getCities();
    };

    //delete city
    $scope.deleteCity = function (city) {
        $http({
            method: 'POST',
            url: '/city/delete',
            data: JSON.stringify(city),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function success() {

            }, function error() {

            });
        $scope.getCities();
    };

    //edit city. fill in city form
    $scope.editCity = function (city) {
        if ($scope.countries[0] == null) {
            $scope.countries.shift();
        };
        $scope.cityId = city.id.toString();
        $scope.cityName = city.cityName.toString();
        $scope.zipCode = city.zipCode.toString();
        $scope.selectedCountry = city.country;
        $scope.countries.unshift(null);
        $scope.countries[$scope.getIndex($scope.countries, city.country)] = city.country;
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

    //fetch all countries
    $scope.getCountries = function () {
        $http({
            method: 'GET',
            url: '/countries'
        })
            .then(function success(response) {
                $scope.countries = response.data;
            }, function error(response) {

            });
    };

    //reset city form
    $scope.resetCityForm = function () {
        $scope.cityId = null;
        $scope.cityName = null;
        $scope.zipCode = null;
        $scope.selectedCountry = null;

    };
});