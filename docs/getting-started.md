# Getting started

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
