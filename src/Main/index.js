import React from 'react';
import injectSheet from 'react-jss';

import CreateToDoItem from '../CreateToDo';
import ToDoList from '../ToDoList';
import filterBySelect from './FilterBySelect.js';

import style from './style';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: 'All',
      todos: [],
      themes: 'dark'
    };

    this.onToDoItemCreate = this.onToDoItemCreate.bind(this);
    this.handleToDoItemMaker = this.handleToDoItemMaker.bind(this);
    this.handleToDoItemRemover = this.handleToDoItemRemover.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  handleFilter(e) {
    this.setState({
      selectedFilter: e.target.textContent
    });
  }

  onToDoItemCreate(value) {
    const { todos } = this.state;

    this.setState({
      todos: [value, ...todos]
    });
  }

  handleToDoItemMaker(todos) {
    this.setState({
      todos: todos
    });
  }

  handleToDoItemRemover(todos) {
    this.setState({
      todos: todos
    });
  }

  toggleTheme() {
    this.setState(state => ({
      themes: state.themes === 'dark' ? 'light' : 'dark'
    }));
  }

  render() {
    const { classes } = this.props;
    const { todos, selectedFilter } = this.state;

    const filteredTodos = filterBySelect(todos, selectedFilter);
    const leftItems = filteredTodos.reduce(
      (acc, { value, isComplete }) => (isComplete === false ? (acc += 1) : acc),
      0
    );

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <h1
            onClick={this.toggleTheme}
            className={`${classes.title}-${this.state.themes} ${classes.title}`}
          >
            todos
          </h1>

          <CreateToDoItem
            length={leftItems}
            onToDoItemCreate={this.onToDoItemCreate}
          />
          <ToDoList
            todos={filteredTodos}
            handleToDoItemMaker={this.handleToDoItemMaker}
            handleToDoItemRemover={this.handleToDoItemRemover}
            handleFilter={this.handleFilter}
          />
        </div>
      </div>
    );
  }
}

export default injectSheet(style)(Main);
