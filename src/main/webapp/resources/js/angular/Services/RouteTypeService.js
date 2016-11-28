'use strict';

miniBus.service('RouteTypeService', function ($http) {
    //save/update routetype
    this.save = function ($scope) {
        var dataObject = {
            "type": $scope.routeType
        };
        if ($scope.routeTypeId != null) {
            dataObject = angular.extend(dataObject, {"id": $scope.routeTypeId});
        }
        $http({
            method: 'POST',
            url: '/routeType/save',
            data: JSON.stringify(dataObject),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function success() {

            }, function error() {

            });
        this.resetRouteTypeForm($scope);
        this.getRouteTypes($scope);
    };
    //delete routetype
    this.delete = function ($scope, country) {
        $http({
            method: 'POST',
            url: '/routeType/delete',
            data: JSON.stringify(country),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function success() {

            }, function error() {

            });
        this.getRouteTypes($scope);
    };

    //fetch all routetypes
    this.getRouteTypes = function ($scope) {
        $http({
            method: 'GET',
            url: '/routeTypes'
        })
            .then(function success(response) {
                $scope.routeTypes = response.data;
            }, function error() {
                console.error('Error while fetching route types');
            });
    };

    //edit routetype. fill in routetype form
    this.fillInForm = function ($scope, routeType) {
        $scope.routeType = routeType.type.toString();
        $scope.routeTypeId = routeType.id.toString();
    };

    //reset routetype form
    this.resetRouteTypeForm = function ($scope) {
        $scope.routeTypeId = null;
        $scope.routeType = null;
    };
});