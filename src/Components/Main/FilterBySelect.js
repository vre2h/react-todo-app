export default (list, selecter) => {
  if (selecter === 'All') {
    return list;
  } else if (selecter === 'Completed') {
    return list.reduce((acc, { value, isComplete, id }) => {
      if (isComplete) {
        return [...acc, { value, isComplete, id }];
      }
      return [...acc];
    }, []);
  }

  return list.reduce((acc, { value, isComplete, id }) => {
    if (!isComplete) {
      return [...acc, { value, isComplete, id }];
    }
    return [...acc];
  }, []);
};
