miniBus.controller('CountryController', function ($scope, $http) {
    //save/update country
    $scope.submitCountryForm = function () {
        var dataObject;
        if ($scope.countryId == null) {
            dataObject = {
                "countryName": $scope.countryName
            };
        } else {
            dataObject = {
                "id": $scope.countryId,
                "countryName": $scope.countryName
            };
        }
        $http({
            method: 'POST',
            url: '/country/save',
            data: JSON.stringify(dataObject),
            headers: {'Content-Type': 'application/json'}
        })
            .success(function (data) {
                if (data.errors) {
                    //$scope.errorName = data.errors.name;
                    //$scope.errorUserName = data.errors.username;
                    //$scope.errorEmail = data.errors.email;
                } else {
                    //$scope.message = data.message;
                }
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
            .success(function (data) {
                if (data.errors) {
                    //$scope.errorName = data.errors.name;
                    //$scope.errorUserName = data.errors.username;
                    //$scope.errorEmail = data.errors.email;
                } else {
                    //$scope.message = data.message;
                }
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
            }, function myError(response) {

            });
    };
    //reset country form
    $scope.resetCountryForm = function () {
        $scope.countryId = null;
        $scope.countryName = null;
    };
});