import React from 'react';
import style from './style';
import injectSheet from 'react-jss';

import Checker from '../Checker';

class ListItem extends React.Component {
  render() {
    const {
      todoInfo,
      onClick,
      onMark,
      className,
      classes,
      onRemover
    } = this.props;

    const { value, isComplete } = todoInfo;

    return (
      <li
        className={`${className} ${classes.default}`} //onClick={onClick}
      >
        <Checker
          checked={isComplete}
          onChange={onMark}
          id="list__item-input"
          for="list__item-input"
          value={value}
          onClick={onClick}
          onRemover={onRemover}
          onToDoItemChange={this.props.onToDoItemChange}
        />
      </li>
    );
  }
}

export default injectSheet(style)(ListItem);
