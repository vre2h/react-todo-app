import React from 'react';
import style from './style';
import injectSheet from 'react-jss';

class ToDoList extends React.Component {
  render() {
    const { todo, classes } = this.props;
    return (
      <div>
        <ul>{todo.map((value, idx) => <li key={idx}>{value}</li>)}</ul>
        <div className={classes.root}>
          <span>Items Left</span>
          <div className={classes.filter}>
            <button> All </button>
            <button> Completed </button>
            <button> Active </button>
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(style)(ToDoList);
