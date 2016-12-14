'use strict';

miniBus.service('SubRouteService', function ($http, $q, $log) {

    //fetch all subroutes
    this.getSubRoutes = function () {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: '/subRoutes'
        })
            .then(function (response) {
                deferred.resolve(response.data);
            }, function (response) {
                $log.error('Error fetching subroutes with status: ' + response.status);
                deferred.reject(response);
            });
        return deferred.promise;
    };

    //save/update subroute
    this.save = function (subRoute) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: '/subRoute/save',
            data: JSON.stringify(subRoute),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function (response) {
                $log.info('Subroute saved');
                deferred.resolve(response);
            }, function (response) {
                $log.error('Error saving subroute with status: ' + response.status);
                deferred.reject(response);
            });
        return deferred.promise;
    };

    //delete subroutes
    this.delete = function (subRoute) {
        var deferred = $q.defer();
        $http({
            method: 'DELETE',
            url: '/subRoute/delete',
            data: JSON.stringify(subRoute),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function (response) {
                $log.info('Subroute deleted');
                deferred.resolve(response);
            }, function (response) {
                $log.error('Error deleting subroute with status: ' + response.status);
                deferred.reject(response);
            });
        return deferred.promise;
    };
});