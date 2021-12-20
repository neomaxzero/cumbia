import { MESSAGES_TYPE } from "./messages";

export const todo = ({ emit }) => {
  const actions = {
    add: ({ name }) => emit<MESSAGES_TYPE>("ADD_TODO", name.value),
  };

  return {
    actions,
  };
};
