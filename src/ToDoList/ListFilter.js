const markToDo = (todo, list) => {
  return list.reduce((acc, { value, isComplete, id }, index) => {
    if (value === todo.value && index === todo.idx) {
      return [
        ...acc,
        {
          value,
          isComplete: !isComplete,
          id
        }
      ];
    }

    return [...acc, { value, isComplete, id }];
  }, []);
};

const removeToDo = (todo, list) => {
  return list.reduce((acc, { value, isComplete, id }, index) => {
    if (value === todo.value && index === todo.idx) {
      return [...acc];
    }

    return [...acc, { value, isComplete, id }];
  }, []);
};

export { markToDo, removeToDo };
