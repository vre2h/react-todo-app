import React from 'react';
import injectSheet from 'react-jss';

import style from './style';

class Checker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      value: this.props.value
    };

    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleChangeOnEdit = this.handleChangeOnEdit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleDoubleClick() {
    this.setState({
      isEdit: true
    });
  }

  handleChangeOnEdit(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleKeyDown(e) {
    const { value } = this.state;
    const { onRemover, onToDoItemRemove } = this.props;

    if (e.keyCode === 13) {
      if (value.trim() !== '') {
        onToDoItemRemove(value);
        this.setState({
          isEdit: false
        });
      } else {
        onRemover();
      }
    }
  }

  render() {
    const { classes } = this.props;
    const { value, isEdit } = this.state;

    return (
      <React.Fragment>
        <input
          type="checkbox"
          className={`${classes.list__checkbox} ${this.props.classes.default}`}
          onChange={this.props.onChange}
          id={this.props.id}
          checked={this.props.checked}
        />
        {isEdit ? (
          <input
            type="text"
            className={classes.list__edit}
            value={value}
            onChange={this.handleChangeOnEdit}
            onKeyDown={this.handleKeyDown}
            autoFocus
          />
        ) : (
          <label
            className={classes.listLabel}
            onDoubleClick={this.handleDoubleClick}
          >
            {this.props.value}
          </label>
        )}
        <span className={classes.customCheckbox} onClick={this.props.onClick}>
          <span
            className={
              this.props.checked ? classes['customCheckbox--mark'] : null
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
