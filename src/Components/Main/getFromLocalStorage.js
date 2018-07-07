const getAllStorage = () => {
  const keys = Object.keys(localStorage);
  return keys.reduce((acc, elem) => {
    const todo = JSON.parse(localStorage.getItem(elem));
    return [todo, ...acc];
  }, []);
};

export default getAllStorage;
