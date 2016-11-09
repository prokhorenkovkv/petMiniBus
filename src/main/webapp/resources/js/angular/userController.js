app.controller('userController', function ($scope, $http) {
    $scope.formData = {};
    $scope.loadData = function () {
        $http.get("/users")
            .then(function (response) {
                $scope.user = response.data;
            });
    }
    $scope.submitForm = function () {
        $http({
            method: 'POST',
            url: "user/add",
            data: $.param($scope.formData),  // pass in data as strings
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}  // set the headers so angular passing info as form data (not request payload)
        });
    }
});
