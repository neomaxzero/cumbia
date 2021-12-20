export const todoList = ({ on }) => {
    const init = () => {
        on()
    }
    const actions = {
      add: ({ name }) => emit("ADD_TODO", name.value),
    };
  
    return {
      actions,
    };
  };
  