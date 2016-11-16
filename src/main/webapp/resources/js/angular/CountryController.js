miniBus.controller('CountryController', function ($scope, $http) {
    $scope.countryName = "56464";
    //$scope.countryId = null;
    //save/update
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
        $scope.getCountries();
    };

    //delete
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

    //edit
    $scope.editCountry = function (country) {
        $scope.countryName = country.countryName.toString();
        alert(country.countryName.toString());
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
});