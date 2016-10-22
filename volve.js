(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.volve = factory());
}(this, (function () { 'use strict';

/**
 *  volve - Tiny, Performant Debounce and Throttle Functions,
 *     License:  MIT
 *      Copyright Julien Etienne 2016 All Rights Reserved.
 *        github:  https://github.com/julienetie/volve
 *‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
 */

/**
 * Date.now polyfill.
 * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/now}
 */
if (!Date.now) {
    Date.now = function now() {
        return new Date().getTime();
    };
}

var volve_es = {
    /**
     * Throttle a function call during repetiton.
     * @param {Function} - Callback function.
     * @param {Number}   - Limit in milliseconds.
     * @return {Function} - The throttle function. 
     */
    throttle: function throttle(callback, limit) {
        var lastCallTime;
        return function (parameters) {
            var currentCallTime = Date.now();
            if (!lastCallTime || currentCallTime > lastCallTime + limit) {
                callback(parameters);
                lastCallTime = currentCallTime;
            }
        };
    },


    // !!The two functions are not to be refactored!!

    /**
     * Debounce a function call during repetiton.
     * @param {Function} - Callback function.
     * @param {Number}   - Delay in milliseconds.
     * @return {Function} - The debounce function. 
     */
    debounce: function debounce(callback, delay) {
        var lastCallTime;
        return function (parameters) {
            var currentCallTime = Date.now();
            if (!lastCallTime || currentCallTime - lastCallTime > delay) {
                callback(parameters);
                lastCallTime = currentCallTime;
            }
        };
    }
};

return volve_es;

})));
