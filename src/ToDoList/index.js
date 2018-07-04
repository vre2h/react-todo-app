import React from 'react';
import style from './style';
import injectSheet from 'react-jss';

import Button from '../Button';
import ListItem from '../ListItem';

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
    console.log('todos', todos);
    return (
      <div className={classes.list__wrapper}>
        <ul className={classes.list}>
          {todos.map(({ value, isComplete, id }, idx) => {
            const todoInfo = { value, isComplete, id };

            return (
              <div
                className={classes['list__item-wrapper']}
                key={id.toString()}
              >
                <ListItem
                  className={classes.list__item}
                  onClick={this.handleClick.bind(this, todoInfo)}
                  onMark={this.handleChange.bind(this, todoInfo)}
                  onRemover={this.handleRemover.bind(this, todoInfo)}
                  todoInfo={todoInfo}
                  onToDoItemRemove={this.props.onToDoItemRemove.bind(
                    this,
                    todoInfo
                  )}
                />
                <Button
                  className={classes['list__btn-del']}
                  onClick={this.handleRemover.bind(this, todoInfo)}
                  value="Clear"
                  disable={false}
                />
              </div>
            );
          })}
        </ul>
        <div className={classes.root}>
          <span>Tasks Left: {leftItems}</span>
          <div className={classes.filter}>
            <Button
              className={classes.filter__btn}
              value="All"
              disable={false}
              onClick={this.props.handleFilter}
            />
            <Button
              className={classes.filter__btn}
              value="Completed"
              disable={false}
              onClick={this.props.handleFilter}
            />
            <Button
              className={classes.filter__btn}
              value="Active"
              disable={false}
              onClick={this.props.handleFilter}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(style)(ToDoList);
