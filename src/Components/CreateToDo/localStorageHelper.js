const getHighestId = () => {
  const keys = Object.keys(localStorage);

  return keys.reduce((acc, elem) => {
    const todo = JSON.parse(localStorage.getItem(elem));
    const id = Number(todo.id);

    return id > acc ? id : acc;
  }, 0);
};

export default getHighestId;
