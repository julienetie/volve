# Volve
Tiny, Performant Debounce and Throttle Functions.

- `npm i --save volve`

### Debounce:

`volve.debounce(<callback>,<delay>)`

```javascript
import { debounce } from 'volve'

const helloWorld = (e) => {console.log('Hello World Debounced!', e.target)}
const debounceHelloWorld = debounce(helloWorld, 1000)  // Can only click 1 second after your last click.

document.body.addEventListener('click',debounceHelloWorld, false)
// Hello World! <div id="some-element-you-clicked"></div>

```

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

### Why use these functions?
- Volve **dosen't use setTimeout or setInterval** like the majority of debounce and throttle functions. They are tiny and efficent.
- Volve's debounce is trailing edge. (Leading edge senarios for debounce are usually edge case). 
- Supports IE8+

### The Performant Timing Functions collection
Checkout [4d](https://github.com/envidia/4d) which features volve.

MIT License

Copyright (c) 2016 Julien Etienne
