export default (list, selecter) => {
  if (selecter === 'All') {
    return list;
  } else if (selecter === 'Completed') {
    return list.reduce((acc, { value, isComplete }) => {
      if (isComplete) {
        return [...acc, { value, isComplete }];
      }
      return [...acc];
    }, []);
  }

  return list.reduce((acc, { value, isComplete }) => {
    if (!isComplete) {
      return [...acc, { value, isComplete }];
    }
    return [...acc];
  }, []);
};
