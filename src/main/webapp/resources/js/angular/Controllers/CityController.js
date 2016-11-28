miniBus.controller('CityController', function ($scope, $http, CityService, CountryService) {
    //save/update city
    $scope.submitCityForm = function () {
        CityService.save($scope);
    };

    //delete city
    $scope.deleteCity = function (city) {
        CityService.deleteCity($scope, city);
    };

    //edit city. fill in city form
    $scope.editCity = function (city) {
        CityService.fillInForm($scope,city);
    };

    //fetch all cities
    $scope.getCities = function () {
        CityService.getCities($scope);
    };

    //fetch all countries
    $scope.getCountries = function () {
        CountryService.getCountries($scope);
    };

    //reset city form
    $scope.resetCityForm = function () {
        CityService.resetCityForm($scope);
    };
});