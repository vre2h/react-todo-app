import React from 'react';
import ReactDOM from 'react-dom';

import ToDoList from '../../Components/ToDoList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ToDoList />, div);
});
