const markToDo = (todo, list) => {
  return list.reduce((acc, { value, isComplete }, index) => {
    if (value === todo.value && index === todo.idx) {
      return [
        ...acc,
        {
          value,
          isComplete: !isComplete
        }
      ];
    }

    return [...acc, { value, isComplete }];
  }, []);
};

const removeToDo = (todo, list) => {
  return list.reduce((acc, { value, isComplete }, index) => {
    if (value === todo.value && index === todo.idx) {
      return [...acc];
    }

    return [...acc, { value, isComplete }];
  }, []);
};

export { markToDo, removeToDo };
