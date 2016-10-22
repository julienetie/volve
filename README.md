# setAnimationInterval()
Repeatedly call a function without setInterval, call a function by approximate frames per second

- `npm i --save set-animation-interval` = A better performing setInterval **with frames per second**  
also...
- `npm i --save set-animation-frame` = [A better performing setTimeout](https://github.com/julienetie/set-animation-frame)  

```javascript 
// Heads up!
// Animation timing functions work in enviroments that either render or 
// simulate the rendering of frames. (Unlike nodejs & dev tools)
```
### Usage:
```javascript
var requestID = setAnimationInterval(<Callback>, <delay>, <useFPS>);
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
