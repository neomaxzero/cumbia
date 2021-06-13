import cumbia from '../../dist-lib/cumbia.js';

const counter = ({ el }) => {
  const name = 'counter';
  console.log(el);

  const actions = {
    plus: ({ count }) => {
      count.el.innerHTML = parseInt(count.value, 10) + 1;
    },
    minus: ({ count }) => {
      count.el.innerHTML = parseInt(count.value, 10) - 1;
    },
  };

  return {
    name,
    actions,
  };
};

cumbia([counter]);
