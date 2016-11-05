(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.volve = global.volve || {})));
}(this, (function (exports) { 'use strict';

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

/**
 * Throttle a function call during repetiton.
 * @param {Function} - Callback function.
 * @param {Number}   - Limit in milliseconds.
 * @return {Function} - The throttle function. 
 */
function throttle(callback, limit) {
    var lastCallTime = void 0;
    return function (parameters) {
        var currentCallTime = Date.now();
        if (!lastCallTime || currentCallTime > lastCallTime + limit) {
            callback(parameters);
            lastCallTime = currentCallTime;
        }
    };
}

function debounce(callback, delay, trail) {
    var debounceRange = 0;
    var currentTime;
    var lastCall;
    var setDelay;
    var timeoutId;

    var call = function call(parameters) {
        callback(parameters);
    };

    return function (parameters) {
        if (trail) {
            console.log('trail');
            /**
             * setTimeout is only used with the trail option.
             */
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () {
                call(parameters);
            }, delay);
        } else {
            console.log('lead');
            currentTime = Date.now();
            if (currentTime > debounceRange) {
                callback(parameters);
            }
            debounceRange = currentTime + delay;
        }
    };
}

exports.throttle = throttle;
exports.debounce = debounce;

Object.defineProperty(exports, '__esModule', { value: true });

})));
