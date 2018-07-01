import React from 'react';
import injectSheet from 'react-jss';

import style from './style';

class Checker extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <input
          type="checkbox"
          className={`${classes.list__checkbox} ${this.props.classes.default}`}
          onClick={this.props.onClick}
          onChange={this.props.onChange}
          id={this.props.id}
          checked={this.props.checked}
        />
        <label className={classes.listLabel} htmlFor={this.props.for}>
          {this.props.value}
        </label>
        <span className={classes.customCheckbox}>
          <span
            className={
              this.props.isComplete ? classes['customCheckbox--mark'] : null
            }
          >
            &#10003;
          </span>
        </span>
      </React.Fragment>
    );
  }
}

export default injectSheet(style)(Checker);
