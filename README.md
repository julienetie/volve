# Volve
Tiny, Performant Debounce and Throttle Functions.

- `npm i --save volve`

### Usage:
```javascript
import { debounce } from 'volve'

const helloWorld = (e) => {console.log('Hello World!', e.target)}

let debounceHelloWorld = debounce(helloWorld, 1000)

document.body.addEventListener(debounceHelloWorld, false); // Hello World! <div id="some-element-you-clicked"></div>

```
- **Callback** : The function to be executed between each delay.

- **delay** : The delay in milliseconds or frames per second if useFPS is truthy.

- **useFPS** : If true, the delay value is interpreted by FPS. It is false by defualt.


- _setAnimationInterval_ returns the requestID for cancellation via cancelRequestAnimationFrame() ([polyfill](https://github.com/julienetie/request-frame)).
- _setAnimationInterval_ passes the given function the [DOMHighResTimeStamp](https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp) as a parameter.


## Why avoid setInterval?

Checkout [requestAnimationFrame for Smart Animating](https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/) 
By Paul Irish
______

#### Browser support using the [requestFrame](https://github.com/julienetie/request-frame) polyfill. ```npm i --save request-frame```
- IE 5.5+

#### Browser Support Without a  polyfill or vendor prefix usage.
- IE10+

See [caniuse](http://caniuse.com/#feat=requestanimationframe) for more details.

MIT License

Copyright (c) 2016 Julien Etienne
