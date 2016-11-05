/**
 *  set-animation-frame - Delay function calls without setTimeout.
 *     License:  MIT
 *      Copyright Julien Etienne 2016 All Rights Reserved.
 *        github:  https://github.com/julienetie/set-animation-frame
 *‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
 */

/**
 * @param {Function} callback
 * @param {Number} delay
 */

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
 * @param {Boolean}   leading  - Leading or trailing.
 * @return {Function} - The debounce function. 
 */
function debounce(callback, delay, leading = true) {
    var debounceRange = 0;
    var currentTime;
    var lastCall;
    var setDelay;
    var timeoutId;
    var frame;
    function run(parameters) {
        callback(parameters);
    }
    return parameters => {
        if (leading) {
            currentTime = Date.now();
            if (currentTime > debounceRange) {
                callback(parameters);
            }
            debounceRange = currentTime + delay;
        } else {
            /** 
             * setTimeout is only used with the trailing option.
             */
            clearTimeout(id);
            timeoutId = setTimeout(() => {
                cancelAnimationFrame(lastCall);
                lastCall = requestAnimationFrame(() => run(parameters));
            }, delay);
        }
    };
}

export { throttle, debounce };
