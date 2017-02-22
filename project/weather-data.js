'use strict';
/* eslint-disable no-alert, no-console */

function Weather(cityName, description) {
    this.cityName = cityName;
    this.description = description;
    this._description = '';
    this._temperature = '';
}

Object.defineProperty(Weather.prototype, 'temperature', {
    get: function() {
        return this._temperature;
    },
    set: function(value) {
        this._temperature = (value * 1.8 + 32).toFixed(2) + 'F.';
    }
});