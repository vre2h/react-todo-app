import React from 'react';
import style from './style';
import injectSheet from 'react-jss';

import { markToDo } from './ListFilter';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(todo, e) {
    this.handleChange(todo);
  }

  handleChange(todo) {
    console.log('a');
    this.props.handleToDoItemMaker(markToDo(todo, this.props.todos));
  }

  render() {
    const { classes } = this.props;
    const { todos } = this.props;

    const leftItems = todos.reduce(
      (acc, { value, isComplete }) => (isComplete === false ? (acc += 1) : acc),
      0
    );

    return (
      <div className={classes.list__wrapper}>
        <ul className={classes.list}>
          {todos.map(({ value, isComplete }, idx) => (
            <li
              className={classes.list__item}
              key={idx}
              onClick={this.handleClick.bind(this, {
                value,
                isComplete,
                idx
              })}
            >
              <input
                type="checkbox"
                id="list__item-input"
                className={classes.list__checkbox}
                checked={isComplete}
                onChange={this.handleChange.bind(this, {
                  value,
                  isComplete,
                  idx
                })}
              />{' '}
              <label className={classes.list__label} htmlFor="list__item-input">
                {value}
              </label>
              <span className={classes.customCheckbox}>
                <span
                  className={
                    isComplete ? classes['customCheckbox--mark'] : null
                  }
                >
                  &#10003;
                </span>
              </span>
            </li>
          ))}
        </ul>
        <div className={classes.root}>
          <span>Tasks Left: {leftItems}</span>
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
