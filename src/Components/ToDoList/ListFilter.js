const markToDo = (todo, list) => {
  return list.reduce((acc, { value, isComplete, id }, index) => {
    if (value === todo.value && todo.id === id) {
      const newTodo = {
        value,
        isComplete: !isComplete,
        id
      };

      return [...acc, newTodo];
    }

    return [...acc, { value, isComplete, id }];
  }, []);
};

const removeToDo = (todo, list) => {
  return list.reduce((acc, { value, isComplete, id }, index) => {
    if (value === todo.value && todo.id === id) {
      return [...acc];
    }

    return [...acc, { value, isComplete, id }];
  }, []);
};

export { markToDo, removeToDo };
