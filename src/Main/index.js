import React from 'react';
import injectSheet from 'react-jss';

import CreateToDoItem from '../CreateToDo';
import ToDoList from '../ToDoList';

import style from './style';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: 'all',
      todos: [{ value: 'ds', isComplete: true }]
    };

    this.onToDoItemCreate = this.onToDoItemCreate.bind(this);
    this.handleToDoItemMaker = this.handleToDoItemMaker.bind(this);
    this.handleToDoItemRemover = this.handleToDoItemRemover.bind(this);
  }

  onToDoItemCreate(value) {
    const { todos } = this.state;
    this.setState({
      todos: [...todos, value]
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

  render() {
    const { classes } = this.props;
    const { todos } = this.state;

    const leftItems = todos.reduce(
      (acc, { value, isComplete }) => (isComplete === false ? (acc += 1) : acc),
      0
    );

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <h1 className={classes.title}>todos</h1>
          <CreateToDoItem
            length={leftItems}
            onToDoItemCreate={this.onToDoItemCreate}
          />
          <ToDoList
            todos={todos}
            handleToDoItemMaker={this.handleToDoItemMaker}
            handleToDoItemRemover={this.handleToDoItemRemover}
          />
        </div>
      </div>
    );
  }
}

export default injectSheet(style)(Main);
