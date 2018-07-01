const markToDo = (todo, list) => {
  return list.reduce((acc, { value, isComplete }) => {
    if (value === todo.value) {
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

export { markToDo };
