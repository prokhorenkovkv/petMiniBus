'use strict';

miniBus.service('GlobalService', function ($http) {
    this.getIndex = function (array, selectedElement) {
        for (var i = 1; i < array.length; i++) {
            if (array[i].id == selectedElement.id) {
                return i;
            }
        }
    };
});