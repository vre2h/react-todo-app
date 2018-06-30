import React from 'react';
import injectSheet from 'react-jss';

import CreateToDo from '../CreateToDo';

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
        <h1 className={classes.title}>todos</h1>
        <CreateToDo
          hasToDo={this.state.todo.length > 0}
          onToDoItemCreate={this.onToDoItemCreate}
        />
        <ul>{todo.map((value, idx) => <li key={idx}>{value}</li>)}</ul>
      </div>
    );
  }
}

export default injectSheet(style)(Main);
