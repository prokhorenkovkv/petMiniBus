'use strict';

miniBus.controller('RouteTypeController', function ($scope, $http, RouteTypeService) {

    //fetch all routetypes
    $scope.getRouteTypes = function () {
        RouteTypeService.getRouteTypes()
            .then(
                function (response) {
                    $scope.routeTypes = response;
                });
    };

    //save/update routetype
    $scope.submitRouteTypeForm = function () {
        RouteTypeService.save(
            {
                "id": $scope.routeTypeId,
                "type": $scope.routeType
            }
        )
            .then(
                function () {
                    $scope.getRouteTypes();
                    $scope.resetRouteTypeForm();
                });
    };

    //delete country
    $scope.deleteRouteType = function (routeType) {
        RouteTypeService.delete(routeType)
            .then(
                function () {
                    $scope.getRouteTypes();
                });
    };

    //edit country. fill in country form
    $scope.editRouteType = function (routeType) {
        $scope.routeTypeId = routeType.id.toString();
        $scope.routeType = routeType.type.toString();
    };

    //reset country form
    $scope.resetRouteTypeForm = function () {
        $scope.routeTypeId = null;
        $scope.routeType = null;
    };
});