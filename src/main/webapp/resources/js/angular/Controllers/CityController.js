miniBus.controller('CityController', function ($scope, $http, CityService, CountryService, GlobalService) {

    //fetch all cities
    $scope.getCities = function () {
        CityService.getCities($scope)
            .then(
                function (response) {
                    $scope.cities = response;
                });
    };

    //save/update city
    $scope.submitCityForm = function () {
        CityService.save(
            {
                "id": $scope.cityId,
                "zipCode": $scope.zipCode,
                "cityName": $scope.cityName,
                "country": $scope.selectedCountry
            }
        )
            .then(
                function () {
                    $scope.getCities();
                    $scope.resetCityForm();
                });
    };

    //delete city
    $scope.deleteCity = function (city) {
        CityService.delete(city)
            .then(
                function () {
                    $scope.getCities();
                });
    };

    //edit city. fill in city form
    $scope.editCity = function (city) {
        $scope.cityId = city.id.toString();
        $scope.cityName = city.cityName.toString();
        $scope.zipCode = city.zipCode.toString();
        $scope.selectedCountry = city.country;
        $scope.countries[GlobalService.getIndex($scope.countries, city.country)] = city.country;
    };

    //reset city form
    $scope.resetCityForm = function () {
        $scope.cityId = null;
        $scope.cityName = null;
        $scope.zipCode = null;
        $scope.selectedCountry = null;
    };

    //fetch all countries
    $scope.getCountries = function () {
        CountryService.getCountries($scope)
            .then(
                function (response) {
                    $scope.countries = response;
                });
    };
});