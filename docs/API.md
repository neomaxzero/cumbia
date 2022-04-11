
# API

## cumbia({ component: componentFunction})

Cumbia receives an object of components. 

## Component (componentFunction)

A component is a function that specifies what to do with the HTML element it enhances.

### Component structure

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


## Global Initialisers

In case you need to interact with all data-components after initialising the process you can provide an argument to cumbia. This might be useful to log or check something in every component.

### Debugger

```javascript
import cumbia, { debug } from 'cumbia';

// Call the power of the Cumbia
cumbia(..., {
  globalInitalisers: [debug]
});
```