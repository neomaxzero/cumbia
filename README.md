<p align="center">
  <a href="https://cumbia.vercel.app/">
    <img src="https://github.com/neomaxzero/cumbia/blob/master/assets/cumbia.png?raw=true" height="128" alt="Cumbia.JS">    
  </a>
</p>

_A humble Javascript framework_

Cumbia aims to give you a thin layer between your HTML and JS. An opinionated way of creating components and craft a web page.

[ > Go to docs page](https://cumbia.vercel.app/)

## Getting started

1. Add _cumbia_ to your project.

```bash
yarn add cumbia
```

2. Enhance your HTML

```html
<div data-component="counter">
  <button data-action="plus">+</button>
  <p data-value="count">5</p>
</div>
```

3. Add your JS magic

```javascript
import cumbia from 'cumbia';

// Define your component
const counter = ({ el }) => {
  const actions = {
    plus: ({ count }) => {
      count.el.innerHTML = parseInt(count.value, 10) + 1;
    },
  };

  return {
    actions,
  };
};

// Call the power of the Cumbia
cumbia([counter]);
```

## Try it out yourself

[![Edit cumbia-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/cumbia-example-501gu?fontsize=14&hidenavigation=1&theme=dark)

## Core values

- Progressive-enhancement driven.
- Be magic enough but easy to extend.
- Tiny and performant. (< 5Kb)


## API

### cumbia([]<Component>)

Cumbia receives an array of component. It's going to initialise them in the order they are provided.

### Component

It's a function that specifies what to do with the HTML element it enhances.

#### Component structure

Cumbia will execute the component function an provide an object with the following structure: 

-  `el`: The HTML element tied to the component.

To let Cumbia know what to do with the HTML element we can pass an object with some functions the library will execute:

- `init`: Initialise your component. It receives all the values found with `data-value` attribute inside the element.

- `actions`: Smart event listener. Attaches event listener to the element defined with `data-action`. 

  - By default the event listener attached is based on `click` events.
  - For `input` elements the event listener attached is `change`.
  - For `form` the name of the data-action **MUST BE `submit`** and it'll attach the event listener to the HTML form.
  - `data-action-key` will attach `keyup` event listener to the action elements.

When calling the action defined in your JS component, cumbia will give you the list of all the values parsed, including the elements.


### Global Initialisers

In case you need to interact with all data-components after initialising the process you can provide an argument to cumbia. This might be useful to log or check something in every component.

#### Debugger

```javascript
import cumbia, { debug } from 'cumbia';

// Define your component
const component = ({ el }) => {

};

// Call the power of the Cumbia
cumbia([component], {
  globalInitalisers: [debug]
});
```