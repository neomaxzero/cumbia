import cumbia from '../../dist-lib/cumbia.js';

const counter = ({ el }) => {
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
cumbia([form, counter]);
