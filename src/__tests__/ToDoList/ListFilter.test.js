import { removeToDo } from '../../Components/ToDoList/ListFilter';

xit('Remover works!', () => {
  const expected = [{ value: '11', isComplete: false, id: 3 }];
  expect(expected).toEqual(
    removeToDo({ value: '10', isComplete: false, id: 4 }, [
      { value: '10', isComplete: false, id: 4 },
      { value: '11', isComplete: false, id: 3 }
    ])
  );
});
