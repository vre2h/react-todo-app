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
      todos: []
    };

    this.onToDoItemCreate = this.onToDoItemCreate.bind(this);
    this.onToDoItemRemover = this.onToDoItemRemover.bind(this);
  }

  onToDoItemCreate(value) {
    const { todos } = this.state;
    this.setState({
      todos: [...todos, value]
    });
  }

  onToDoItemRemover(todos) {
    this.setState({
      todos: todos
    });
  }

  render() {
    const { classes } = this.props;
    const { todos } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <h1 className={classes.title}>todos</h1>
          <CreateToDoItem
            hasToDo={this.state.todos.length > 0}
            onToDoItemCreate={this.onToDoItemCreate}
          />
          <ToDoList todos={todos} onToDoItemRemover={this.onToDoItemRemover} />
        </div>
      </div>
    );
  }
}

export default injectSheet(style)(Main);
