import React from 'react';
import injectSheet from 'react-jss';

import style from './style';

class Button extends React.Component {
  render() {
    return (
      <button
        className={`${this.props.className} ${this.props.classes.default}`}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}

export default injectSheet(style)(Button);
