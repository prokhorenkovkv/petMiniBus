miniBus.controller('RouteTypeController', function ($scope, $http, RouteTypeService) {
    //save/update routetype
    $scope.submitRouteTypeForm = function () {
        RouteTypeService.save($scope);
    };

    //edit routetype. fill in routetype form
    $scope.editRouteType = function (routeType) {
        RouteTypeService.fillInForm($scope, routeType);
    };

    //delete routetype
    $scope.deleteRouteType = function (routeType) {
        RouteTypeService.delete($scope, routeType);
    };

    //fetch all routetypes
    $scope.getRouteTypes = function (){
        RouteTypeService.getRouteTypes($scope);
    };
});