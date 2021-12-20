import cumbia from '../../cumbia.js';
import debug from '../../src/utils/components/debug';

const counter = ({ el }) => {
  const init = (values) => {
    console.log('Hello from counter', values);
  };
  const actions = {
    plus: ({ count }) => {
      count.el.innerHTML = parseInt(count.value, 10) + 1;
    },
    minus: ({ count }) => {
      count.el.innerHTML = parseInt(count.value, 10) - 1;
    },
  };

  return {
    actions,
    init,
  };
};

const form = () => {
  const actions = {
    submit: ({ name, result }) => {
      result.el.innerHTML = name.value;
    },
    updateResult: ({ result, name }) => {
      result.el.innerHTML = name.value;
    },
  };

  return {
    actions,
  };
};

cumbia([form, counter], { globalInitialisers: [debug]});
