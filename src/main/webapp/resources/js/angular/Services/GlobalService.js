'use strict';

miniBus.service('GlobalService', function ($http) {
    this.getIndex = function (array, selectedElement) {
        for (var i = 0; i < array.length; i++) {
            if (selectedElement != null && array[i].id == selectedElement.id) {
                return i;
            }
        }
    };

    /*//fetch weekdays
    this.getWeekDays = function () {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: '/weekDays'
        })
            .then(function (response) {
                deferred.resolve(response.data);
            }, function (response) {
                $log.error('Error fetching weekdays with status: ' + response.status);
                deferred.reject(response);
            });
        return deferred.promise;
    };*/
});