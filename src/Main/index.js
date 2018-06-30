import React from 'react';
import injectSheet from 'react-jss';

import CreateToDoItem from '../CreateToDo';
import ToDoList from '../ToDoList';
import style from './style';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    };

    this.onToDoItemCreate = this.onToDoItemCreate.bind(this);
  }

  onToDoItemCreate(value) {
    const { todo } = this.state;

    this.setState({
      todo: [...todo, value]
    });
  }

  render() {
    const { classes } = this.props;
    const { todo } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <h1 className={classes.title}>todos</h1>
          <CreateToDoItem
            hasToDo={this.state.todo.length > 0}
            onToDoItemCreate={this.onToDoItemCreate}
          />
          <ToDoList todo={todo} />
        </div>
      </div>
    );
  }
}

export default injectSheet(style)(Main);
