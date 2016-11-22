miniBus.controller('CountryController', function ($scope, $http) {
    //save/update country
    $scope.submitCountryForm = function () {
        var dataObject = {
            "countryName": $scope.countryName
        };
        if ($scope.countryId != null) {
            dataObject = angular.extend(dataObject, {"id": $scope.countryId});
        };
        $http({
            method: 'POST',
            url: '/country/save',
            data: JSON.stringify(dataObject),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function success() {

            }, function error() {

            });
        $scope.resetCountryForm();
        $scope.getCountries();
    };

    //delete country
    $scope.deleteCountry = function (country) {
        $http({
            method: 'POST',
            url: '/country/delete',
            data: JSON.stringify(country),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function success() {

            }, function error() {

            });
        $scope.getCountries();
    };

    //edit country. fill in country form
    $scope.editCountry = function (country) {
        $scope.countryName = country.countryName.toString();
        $scope.countryId = country.id.toString();
    };

    //fetch all countries
    $scope.getCountries = function () {
        $http({
            method: 'GET',
            url: '/countries'
        })
            .then(function success(response) {
                $scope.countries = response.data;
            }, function error() {

            });
    };
    //reset country form
    $scope.resetCountryForm = function () {
        $scope.countryId = null;
        $scope.countryName = null;
    };
});