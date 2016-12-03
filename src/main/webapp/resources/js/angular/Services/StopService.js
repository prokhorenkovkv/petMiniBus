'use strict';

miniBus.service('StopService', function ($http, $q, $log) {

    //fetch all stops
    this.getStops = function () {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: '/stops'
        })
            .then(function (response) {
                deferred.resolve(response.data);
            }, function (response) {
                $log.error('Error fetching stops with status: ' + response.status);
                deferred.reject(response);
            });
        return deferred.promise;
    };

    //save/update stop
    this.save = function (stop) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: '/stop/save',
            data: JSON.stringify(stop),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function (response) {
                $log.info('Stop saved');
                deferred.resolve(response);
            }, function (response) {
                $log.error('Error saving stop with status: ' + response.status);
                deferred.reject(response);
            });
        return deferred.promise;
    };

    //delete stop
    this.delete = function (stop) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: '/stop/delete',
            data: JSON.stringify(stop),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function (response) {
                $log.info('City deleted');
                deferred.resolve(response);
            }, function (response) {
                $log.error('Error deleting stop with status: ' + response.status);
                deferred.reject(response);
            });
        return deferred.promise;
    };
});