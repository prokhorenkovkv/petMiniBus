miniBus.controller('CityController', function ($scope, $http) {
    
    $scope.submitCityForm = function () {
        var dataObject = {
            "zipCode": $scope.zipCode,
            "cityName": $scope.cityName,
            "country": $scope.country
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
        $scope.cityId = city.id.toString();
        $scope.cityName = city.cityName.toString();
        $scope.zipCode = city.zipCode.toString();
        $scope.country = city.country; //todo fix setting value
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
        $scope.country = null;

    };
});