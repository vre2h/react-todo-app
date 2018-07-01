import React from 'react';
import style from './style';
import injectSheet from 'react-jss';

import { markToDo } from './ListFilter';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(todo, e) {
    this.props.onToDoItemRemover(markToDo(todo, this.props.todos));
  }

  render() {
    const { classes } = this.props;
    const { todos } = this.props;

    return (
      <div className={classes.list__wrapper}>
        <ul className={classes.list}>
          {todos.map(({ value, isComplete }, idx) => (
            <li
              className={classes.list__item}
              key={idx}
              onClick={this.handleClick.bind(this, { value, isComplete })}
            >
              <input
                type="checkbox"
                id="list__item-input"
                className={classes.list__checkbox}
                checked={isComplete}
              />
              <label className={classes.list__label} htmlFor="list__item-input">
                {value}
              </label>
            </li>
          ))}
        </ul>
        <div className={classes.root}>
          <span>Items Left: {}</span>
          <div className={classes.filter}>
            <button className={classes.filter__btn}> All </button>
            <button className={classes.filter__btn}> Completed </button>
            <button className={classes.filter__btn}> Active </button>
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(style)(ToDoList);
