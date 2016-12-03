'use strict';

miniBus.service('CountryService', function ($http, $q, $log) {

    //fetch all countries
    this.getCountries = function () {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: '/countries'
        })
            .then(function (response) {
                deferred.resolve(response.data);
            }, function (response) {
                $log.error('Error fetching countries with status: ' + response.status);
                deferred.reject(response);
            });
        return deferred.promise;
    };
    
    //save/update country
    this.save = function (country) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: '/country/save',
            data: JSON.stringify(country),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function (response) {
                $log.info('Country saved');
                deferred.resolve(response);
            }, function (response) {
                $log.error('Error saving country with status: ' + response.status);
                deferred.reject(response);
            });
        return deferred.promise;
    };

    //delete country
    this.delete = function (country) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: '/country/delete',
            data: JSON.stringify(country),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function (response) {
                $log.info('Country deleted');
                deferred.resolve(response);
            }, function (response) {
                $log.error('Error deleting country with status: ' + response.status);
                deferred.reject(response);
            });
        return deferred.promise;
    };
});