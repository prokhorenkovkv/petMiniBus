'use strict';

miniBus.controller('RouteController', function ($scope,
                                                $http,
                                                RouteService,
                                                RouteTypeService,
                                                CountryService,
                                                CityService,
                                                StopService,
                                                GlobalService) {

    //fetch all routes
    $scope.getRoutes = function () {
        RouteService.getRoutes()
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
        var country = route.stops[0].city.country;
        var city = route.stops[0].city;
        var type = route.routeType;

        $scope.routeId = route.id;
        $scope.selectedRouteType = type;
        $scope.routeTypes[GlobalService.getIndex($scope.routeTypes, type)] = type;
        $scope.selectedCountry = country;
        $scope.countries[GlobalService.getIndex($scope.countries, country)] = country;
        $scope.number = route.number;

        CityService.getCitiesByCountry(country)
            .then(
                function (response) {
                    $scope.cities = response;
                    $scope.selectedCity = city;
                    $scope.cities[GlobalService.getIndex($scope.cities, city)] = city;
                    StopService.getStopsByCity(city)
                        .then(
                            function (response) {
                                $scope.stops = response;
                            });
                    $scope.stopsInRoute = route.stops;
                });
        
    };

    //reset route form
    $scope.resetRouteForm = function () {

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
        RouteTypeService.getRouteTypes()
            .then(
                function (response) {
                    $scope.routeTypes = response;
                });
    };

    //fetch all countries
    $scope.getCountries = function () {
        CountryService.getCountries()
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