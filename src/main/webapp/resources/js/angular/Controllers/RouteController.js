miniBus.controller('RouteController', function ($scope,
                                                $http,
                                                RouteService,
                                                RouteTypeService,
                                                CountryService,
                                                CityService,
                                                StopService) {

    //fetch all routes
    $scope.getRoutes = function () {
        RouteService.getRoutes($scope)
            .then(
                function (response) {
                    $scope.routes = response;
                });
    };

    //save/update route
    $scope.submitRouteForm = function () {
        RouteService.save(
            {
                "id": $scope.routeId,
                "routeType": $scope.selectedRouteType,
                "number": $scope.number,
                "stops": $scope.stopsInRoute
            }
        )
            .then(
                function () {
                    $scope.getRoutes();
                    $scope.resetRouteForm();
                });
    };

    //delete route
    $scope.deleteRoute = function (route) {
        RouteService.delete(route)
            .then(
                function () {
                    $scope.getRoutes();
                });
    };

    //edit route. fill in route form
    $scope.editRoute = function (route) {
        /*TODO: do this*/
    };

    //reset route form
    $scope.resetRouteForm = function () {
        $scope.routeId = null;
        $scope.selectedRouteType = null;
        $scope.selectedCountry = null;
        $scope.cities = null;
        $scope.selectedCity = null;
        $scope.number = null;
        $scope.stops = null;
        $scope.selectedStop = null;
        $scope.stopsInRoute = null;
    };

    //fetch all route types
    $scope.getRouteTypes = function () {
        RouteTypeService.getRouteTypes($scope)
            .then(
                function (response) {
                    $scope.routeTypes = response;
                });
    };

    //fetch all countries
    $scope.getCountries = function () {
        CountryService.getCountries($scope)
            .then(
                function (response) {
                    $scope.countries = response;
                });
    };

    //fetch cities by country
    $scope.getCitiesByCountry = function () {
        CityService.getCitiesByCountry($scope.selectedCountry)
            .then(
                function (response) {
                    $scope.cities = response;
                });
    };

    //fetch stops by city
    $scope.getStopsByCity = function () {
        StopService.getStopsByCity($scope.selectedCity)
            .then(
                function (response) {
                    $scope.stops = response;
                });
    };

    //add stop to current route
    $scope.addStopToRoute = function () {
        $scope.stopsInRoute.push($scope.selectedStop);
    };

    //remove stop from current route
    $scope.deleteStopFromRoute = function (index) {
        $scope.stopsInRoute.splice(index, 1);
    };
});