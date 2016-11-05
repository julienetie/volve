# Volve
Tiny, Performant Debounce and Throttle Functions.

### Why use these functions?
- Volve **avoids the use of setTimeout and setInterval** for efficency with the exception of the trail option when using debounce.
- No clutter.
- Built in ES6
- UMD, CJS and ES6 support.
- Supports all browsers from IE5+ with the use of [requestFrame](https://github.com/julienetie/request-frame)

- `npm i --save volve`

### Debounce:

`volve.debounce(<callback>,<delay>,<trail>)`

```javascript
import { debounce } from 'volve'

const helloWorld = (e) => {console.log('Hello World Debounced!', e.target)}
const debounceHelloWorld = debounce(helloWorld, 1000)  // Can only click 1 second after your last click.

document.body.addEventListener('click',debounceHelloWorld, false)
// Hello World! <div id="some-element-you-clicked"></div>

```
By default debounce will lead with the first function call, if the trail option {Boolean} is enabled, the callback will be fired after the last batch of calls that fall within conjoining delays.

Consider checkin out: https://css-tricks.com/the-difference-between-throttling-and-debouncing/ for a good explanation.

### Throttle:

`volve.throttle(<callback>,<limit>)`

```javascript
import { throttle } from 'volve'

const helloWorld = (e) => {console.log('Hello World Throttled!', e.target)}
const throttleHelloWorld = throttle(helloWorld, 1000) // Can only click once in every second.

document.body.addEventListener('click',throttleHelloWorld, false)
// Hello World! <div id="some-element-you-clicked"></div>

```
In the two examples above debounce will make the user wait 1000ms until they can trigger a future call.
Throttle will only allow the user trigger a call once within every 1000ms period.

### The Performant Timing Functions collection
Checkout [4d](https://github.com/envidia/4d) which features volve.

MIT License

Copyright (c) 2016 Julien Etienne
