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
                "routes": $scope.routes,
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
                    $scope.resetSubRouteForm();
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

    //edit subroute. fill in subroute form
    $scope.editSubRoute = function (subRoute) {
        var country = subRoute.routes[0].stops[0].city.country;
        var city = subRoute.routes[0].stops[0].city;
        $scope.subRouteId = subRoute.id;
        $scope.selectedCountry = country;
        $scope.countries[GlobalService.getIndex($scope.countries, country)] = country;
        CityService.getCitiesByCountry(country)
            .then(
                function (response) {
                    $scope.cities = response;
                    $scope.selectedCity = city;
                    $scope.cities[GlobalService.getIndex($scope.cities, city)] = city;
                    StopService.getStopsByCity(city)
                        .then(
                            function (response) {
                                var startStop = subRoute.startEnd.startStop;
                                var endStop = subRoute.startEnd.endStop;
                                $scope.stopsForStart = response;
                                $scope.stopsForEnd = response;
                                $scope.selectedStartStop = startStop;
                                $scope.selectedEndStop = endStop;
                                $scope.stopsForStart[GlobalService.getIndex($scope.stopsForStart, startStop)] = startStop;
                                $scope.stopsForEnd[GlobalService.getIndex($scope.stopsForEnd, endStop)] = endStop;
                            });
                });
    };


    //reset subroute form
    $scope.resetSubRouteForm = function () {
        $scope.selectedCountry = null;
        $scope.cities = null;
        $scope.selectedCity = null;
        $scope.stopsForStart = null;
        $scope.selectedStartStop = null;
        $scope.stopsForEnd = null;
        $scope.selectedEndStop = null;
        $scope.routesByStartEndStops = null;
        $scope.routes = null;
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
                    $scope.stopsForStart = response;
                    $scope.stopsForEnd = response;
                });
    };

    //fetch routes by start/end stops
    $scope.getRoutesBySubRouteStartEndStops = function () {
        if ($scope.selectedStartStop != null && $scope.selectedEndStop != null) {
            RouteService.getRoutesBySubRouteStartEndStops({
                "startStop": $scope.selectedStartStop,
                "endStop": $scope.selectedEndStop
            })
                .then(
                    function (response) {
                        $scope.routesByStartEndStops = response;
                    });
        }
    };
    $scope.submitRoute = function (route) {
        //delete $scope.routesByStartEndStops[GlobalService.getIndex($scope.routesByStartEndStops, route)];
        $scope.routes.push(route);
    };
    $scope.unsubmitRoute = function (route) {
        $scope.routes.pop(route);
    };

    /*$scope.getWeekDays = function () {
     GlobalService.getWeekDays()
     .then(
     function (response) {
     $scope.weekDays = response;
     console.log($scope.weekDays);
     });
     };*/
});