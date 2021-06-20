<p align="center">
  <a href="https://blog.m4x.io">
    <img src="https://github.com/neomaxzero/cumbia/blob/master/assets/cumbia.png?raw=true" height="128" alt="Cumbia.JS">    
  </a>
</p>

_A humble Javascript framework_

Cumbia aims to give you a thin layer between your HTML and JS. An opinionated way of creating components and craft a web page.

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

- Facilitate progressive-enhancement.
- Be magic enough but easy to extend.
- Tiny and performant. (< 5Kb)
