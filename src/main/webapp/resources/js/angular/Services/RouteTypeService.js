'use strict';

miniBus.service('RouteTypeService', function ($http, $q, $log) {

    //fetch all routetypes
    this.getRouteTypes = function () {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: '/routeTypes'
        })
            .then(function (response) {
                deferred.resolve(response.data);
            }, function (response) {
                $log.error('Error fetching route types with status: ' + response.status);
                deferred.reject(response);
            });
        return deferred.promise;
    };

    //save/update routetype
    this.save = function (routeType) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: '/routeType/save',
            data: JSON.stringify(routeType),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function (response) {
                $log.info('Route type saved');
                deferred.resolve(response);
            }, function (response) {
                $log.error('Error saving route type with status: ' + response.status);
                deferred.reject(response);
            });
        return deferred.promise;
    };

    //delete routetype
    this.delete = function (routeType) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: '/routeType/delete',
            data: JSON.stringify(routeType),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function (response) {
                $log.info('Route type deleted');
                deferred.resolve(response);
            }, function (response) {
                $log.error('Error deleting route type with status: ' + response.status);
                deferred.reject(response);
            });
        return deferred.promise;
    };
});