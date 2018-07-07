const getAllStorage = () => {
  const todosFromStorage = [];
  const keys = Object.keys(localStorage);
  let i = keys.length - 1;

  while (i >= 0) {
    todosFromStorage.push(JSON.parse(localStorage.getItem(keys[i])));
    i -= 1;
  }

  return todosFromStorage;
};

export default getAllStorage;
