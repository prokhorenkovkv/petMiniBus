'use strict';

miniBus.service('CityService', function ($http, $q, $log) {

    //fetch all cities
    this.getCities = function () {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: '/cities'
        })
            .then(function (response) {
                deferred.resolve(response.data);
            }, function (response) {
                $log.error('Error fetching cities with status: ' + response.status);
                deferred.reject(response);
            });
        return deferred.promise;
    };
    
    this.getCitiesByCountry = function (country) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: '/citiesByCountry',
            data: JSON.stringify(country),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function (response) {
                deferred.resolve(response.data);
            }, function (response) {
                $log.error('Error fetching cities by country with status: ' + response.status);
                deferred.reject(response);
            });
        return deferred.promise;
    };

    //save/update city
    this.save = function (city) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: '/city/save',
            data: JSON.stringify(city),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function (response) {
                $log.info('City saved');
                deferred.resolve(response);
            }, function (response) {
                $log.error('Error saving city with status: ' + response.status);
                deferred.reject(response);
            });
        return deferred.promise;
    };

    //delete city
    this.delete = function (city) {
        var deferred = $q.defer();
        $http({
            method: 'DELETE',
            url: '/city/delete',
            data: JSON.stringify(city),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function (response) {
                $log.info('City deleted');
                deferred.resolve(response);
            }, function (response) {
                $log.error('Error deleting city with status: ' + response.status);
                deferred.reject(response);
            });
        return deferred.promise;
    };
});