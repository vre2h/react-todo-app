import React from 'react';
import injectSheet from 'react-jss';

import style from './style';

class Button extends React.Component {
  render() {
    const {
      activeBtn,
      value,
      className,
      classes,
      disabled,
      onClick
    } = this.props;
    return (
      <button
        className={`${
          value === activeBtn ? classes['default--active'] : ''
        } ${className} ${classes.default}`}
        disabled={disabled}
        onClick={onClick}
      >
        {value}
      </button>
    );
  }
}

export default injectSheet(style)(Button);
