miniBus.controller('CountryController', function ($scope, $http, $log, CountryService) {

    //fetch all countries
    $scope.getCountries = function () {
        CountryService.getCountries($scope)
            .then(
                function (response) {
                    $scope.countries = response;
                });
    };

    //save/update country
    $scope.submitCountryForm = function () {
        CountryService.save(
            {
                "id": $scope.countryId,
                "countryName": $scope.countryName
            }
        )
            .then(
                function () {
                    $scope.getCountries();
                    $scope.resetCountryForm();
                });
    };

    //delete country
    $scope.deleteCountry = function (country) {
        CountryService.delete(country)
            .then(
                function () {
                    $scope.getCountries();
                });
    };

    //edit country. fill in country form
    $scope.editCountry = function (country) {
        $scope.countryId = country.id.toString();
        $scope.countryName = country.countryName.toString();
    };

    //reset country form
    $scope.resetCountryForm = function () {
        $scope.countryId = null;
        $scope.countryName = null;
    };
});