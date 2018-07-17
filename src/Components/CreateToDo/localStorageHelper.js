const getHighestId = () => {
  const todosFromStorage = localStorage.getItem('v-todo-todos');
  const jsonTodos = JSON.parse(todosFromStorage) || [];

  return jsonTodos.reduce((acc, elem) => {
    const id = Number(elem.id);

    return id > acc ? id : acc;
  }, 0);
};

export default getHighestId;
