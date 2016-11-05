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
    let lastCallTime;
    return function (parameters) {
        const currentCallTime = Date.now();
        if (!lastCallTime || currentCallTime > lastCallTime + limit) {
            callback(parameters);
            lastCallTime = currentCallTime;
        }
    };
}

/**
 * Debounce a function call during repetiton.
 * @param {Function}  callback - Callback function.
 * @param {Number}    delay    - Delay in milliseconds.
 * @param {Boolean}   trail  - Leading or trailing.
 * @return {Function} - The debounce function. 
 */
function debounce(callback, delay, trail) {
    var debounceRange = 0;
    var currentTime;
    var lastCall;
    var setDelay;
    var timeoutId;
    var frame;

    const call = parameters => {
        callback(parameters);
    };

    return parameters => {
        if (trail) {
            /**
             * setTimeout is only used with the trail option.
             */
            clearTimeout(id);
            timeoutId = setTimeout(() => {
                cancelAnimationFrame(lastCall);
                lastCall = requestAnimationFrame(() => call(parameters));
            }, delay);
        } else {
            currentTime = Date.now();
            if (currentTime > debounceRange) {
                callback(parameters);
            }
            debounceRange = currentTime + delay;
        }
    };
}

export { throttle, debounce };
