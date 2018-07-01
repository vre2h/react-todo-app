import React from 'react';
import style from './style';
import injectSheet from 'react-jss';

class ToDoList extends React.Component {
  render() {
    const { todo, classes } = this.props;
    return (
      <div className={classes.list__wrapper}>
        <ul className={classes.list}>
          {todo.map((value, idx) => (
            <li className={classes.list__item} key={idx}>
              <input
                type="checkbox"
                id="list__item-input"
                className={classes.list__checkbox}
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
