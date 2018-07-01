import React from 'react';
import style from './style';
import injectSheet from 'react-jss';

import Button from '../Button';
import Checker from '../Checker';

import { markToDo, removeToDo } from './ListFilter';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemover = this.handleRemover.bind(this);
  }

  handleClick(todo, e) {
    this.handleChange(todo);
  }

  handleChange(todo) {
    this.props.handleToDoItemMaker(markToDo(todo, this.props.todos));
  }

  handleRemover(todo) {
    this.props.handleToDoItemRemover(removeToDo(todo, this.props.todos));
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
            <div className={classes['list__item-wrapper']}>
              <li
                className={classes.list__item}
                onClick={this.handleClick.bind(this, {
                  value,
                  isComplete,
                  idx
                })}
                key={idx}
              >
                <Checker
                  checked={isComplete}
                  onChange={this.handleChange.bind(this, {
                    value,
                    isComplete,
                    idx
                  })}
                  id="list__item-input"
                  for="list__item-input"
                  isComplete={isComplete}
                  value={value}
                />
              </li>
              <Button
                className={classes['list__btn-del']}
                onClick={this.handleRemover.bind(this, {
                  value,
                  isComplete,
                  idx
                })}
                value="Clear"
                disable={false}
              />
            </div>
          ))}
        </ul>
        <div className={classes.root}>
          <span>Tasks Left: {leftItems}</span>
          <div className={classes.filter}>
            <Button
              className={classes.filter__btn}
              value="All"
              disable={false}
            />
            <Button
              className={classes.filter__btn}
              value="Completed"
              disable={false}
            />
            <Button
              className={classes.filter__btn}
              value="Active"
              disable={false}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(style)(ToDoList);
