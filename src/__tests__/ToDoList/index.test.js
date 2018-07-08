import React from 'react';
import ReactDOM from 'react-dom';

import ToDoList from '../../Components/ToDoList';

xit('renders without crashing', () => {
  class LocalStorageMock {
    constructor() {
      this.store = {};
    }

    clear() {
      this.store = {};
    }

    getItem(key) {
      return this.store[key] || null;
    }

    setItem(key, value) {
      this.store[key] = value.toString();
    }

    removeItem(key) {
      delete this.store[key];
    }
  }

  global.localStorage = new LocalStorageMock();

  const div = document.createElement('div');
  ReactDOM.render(<ToDoList />, div);
});
