miniBus.controller('CountryController', function ($scope, $http) {

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
    };

    //delete
    $scope.deleteCountry = function () {
        var dataObject = {
            "id": "582a2e58ee14f41768d8ee26",
            "countryName": "kl;'"
        };
        //var id = '582a2eafee14f41768d8ee27';
        $http({
            method: 'POST',
            url: '/country/delete',
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
    };
});


/*
 var dataObj = {
 name : $scope.name,
 employees : $scope.employees,
 headoffice : $scope.headoffice
 };
 var res = $http.post('/savecompany_json', dataObj);*/