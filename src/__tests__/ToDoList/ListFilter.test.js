import { removeToDo } from '../../Components/ToDoList/ListFilter';

it('Remover works!', () => {
  const expected = [{ value: '12', isComplete: false, id: 4 }];
  expect(expected).toEqual(
    removeToDo({ value: '10', isComplete: false, id: 3 }, [
      { value: '12', isComplete: false, id: 4 },
      { value: '10', isComplete: false, id: 3 }
    ])
  );
});
