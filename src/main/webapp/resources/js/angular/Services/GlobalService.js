'use strict';

miniBus.service('GlobalService', function ($http) {
    this.getIndex = function (array, selectedElement) {
        for (var i = 0; i < array.length; i++) {
            if (selectedElement != null && array[i].id == selectedElement.id) {
                return i;
            }
        }
    };
});