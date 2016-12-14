'use strict';

miniBus.service('RouteService', function ($http, $q, $log) {

    //fetch all routes
    this.getRoutes = function () {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: '/routes'
        })
            .then(function (response) {
                deferred.resolve(response.data);
            }, function (response) {
                $log.error('Error fetching routes with status: ' + response.status);
                deferred.reject(response);
            });
        return deferred.promise;
    };

    //save/update route
    this.save = function (route) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: '/route/save',
            data: JSON.stringify(route),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function (response) {
                $log.info('Route saved');
                deferred.resolve(response);
            }, function (response) {
                $log.error('Error saving route with status: ' + response.status);
                deferred.reject(response);
            });
        return deferred.promise;
    };

    //delete route
    this.delete = function (route) {
        var deferred = $q.defer();
        $http({
            method: 'DELETE',
            url: '/route/delete',
            data: JSON.stringify(route),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function (response) {
                $log.info('Route deleted');
                deferred.resolve(response);
            }, function (response) {
                $log.error('Error deleting route with status: ' + response.status);
                deferred.reject(response);
            });
        return deferred.promise;
    };

    //fetch routes by stops
    this.getRoutesBySubRouteStartEndStops = function (stops) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: '/routesBySubRouteStartEndStops',
            data: JSON.stringify(stops),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function (response) {
                deferred.resolve(response);
            }, function (response) {
                $log.error('Error fetching routes by subroute start/end stop swith status: ' + response.status);
            });
        return deferred.promise;
    };
});