<p align="center">
  <a href="https://blog.m4x.io">
    <img src="test" height="128">
    <h1 align="center">Cumbia.js</h1>
  </a>
</p>
# Cumbia.js: A humble Javascript framework

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

## Core values

- Facilitate progressive-enhancement.
- Be magic enough but easy to extend.
- Tiny and performant. (< 1Kb)
