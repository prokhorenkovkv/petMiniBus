'use strict';

miniBus.controller('SubRouteController', function ($scope,
                                                   $http,
                                                   RouteService,
                                                   RouteTypeService,
                                                   CountryService,
                                                   CityService,
                                                   StopService,
                                                   SubRouteService,
                                                   GlobalService) {

    //fetch all subroutes
    $scope.getSubRoutes = function () {
        SubRouteService.getSubRoutes()
            .then(
                function (response) {
                    $scope.subRoutes = response;
                });
    };

    //save/update subroute
    $scope.submitSubRouteForm = function () {
        SubRouteService.save(
            {
                "id": $scope.subRouteId,
                "user": {
                    "id": "1",
                    "firstname": "user"
                }, /*TODO: users*/
                "routes": null,
                /*"startStop": $scope.selectedStartStop,
                 "endStop": $scope.selectedEndStop,*/
                "startEnd": {
                    "startStop": $scope.selectedStartStop,
                    "endStop": $scope.selectedEndStop
                },
                "weekDays": null,
                "startTime": null,
                "subscribers": null,
                "isAvailable": true
            }
        )
            .then(
                function () {
                    $scope.getSubRoutes();
                    /*$scope.resetSubRouteForm();*/
                });
    };

    //delete subroute
    $scope.deleteSubRoute = function (subRoute) {
        SubRouteService.delete(subRoute)
            .then(
                function () {
                    $scope.getSubRoutes();
                });
    };
    /*
     //edit subroute. fill in subroute form
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

     //reset subroute form
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
     */
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

    $scope.getRoutesBySubRouteStartEndStops = function () {
        RouteService.getRoutesBySubRouteStartEndStops($scope.startEnd)
            .then(
                function (response) {
                    $scope.routesByStops = response;
                });
    };
    /*
     //add stop to current route
     $scope.addStopToRoute = function () {
     $scope.stopsInRoute.push($scope.selectedStop);
     };

     //remove stop from current route
     $scope.deleteStopFromRoute = function (index) {
     $scope.stopsInRoute.splice(index, 1);
     };*/
});