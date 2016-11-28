miniBus.controller('CountryController', function ($scope, $http, CountryService) {
    //save/update country
    $scope.submitCountryForm = function () {
        CountryService.save($scope);
    };

    //edit country. fill in country form
    $scope.editCountry = function (country) {
        CountryService.fillInForm($scope, country);
    };

    //delete country
    $scope.deleteCountry = function (country) {
        CountryService.delete($scope, country);
    };

    //fetch all countries
    $scope.getCountries = function (){
        CountryService.getCountries($scope);
    };
});