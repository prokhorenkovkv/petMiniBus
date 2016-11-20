miniBus.controller('CityController', function ($scope, $http) {
    
    $scope.submitCityForm = function () {
        var dataObject;
        if ($scope.cityId == null) {
            dataObject = {
                "zipCode": $scope.zipCode,
                "cityName": $scope.cityName,
                "country": $scope.country
            };
        } else {
            dataObject = {
                "id": $scope.cityId,
                "zipCode": $scope.zipCode,
                "cityName": $scope.cityName,
                "country": $scope.country
            };
        }
        $http({
            method: 'POST',
            url: '/city/save',
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
            .success(function (data) {
                if (data.errors) {
                    //$scope.errorName = data.errors.name;
                    //$scope.errorUserName = data.errors.username;
                    //$scope.errorEmail = data.errors.email;
                } else {
                    //$scope.message = data.message;
                }
            });
        $scope.getCities();
    };

    //edit city. fill in city form
    $scope.editCity = function (city) {
        console.log(city.country);
        $scope.cityId = city.id.toString();
        $scope.cityName = city.cityName.toString();
        $scope.zipCode = city.zipCode.toString();
        $scope.country = city.country;
        console.log($scope.country);

    };

    //fetch all cities
    $scope.getCities = function () {
        $http({
            method: 'GET',
            url: '/cities'
        })
            .then(function success(response) {
                $scope.cities = response.data;
            }, function myError(response) {

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
            }, function myError(response) {

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