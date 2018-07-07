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

    this.textInput = React.createRef();

    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleChangeOnEdit = this.handleChangeOnEdit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidUpdate() {
    if (this.state.isEdit) {
      setTimeout(() => {
        this.textInput.current.focus();
      }, 0);
    }
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
    const { onRemover, onToDoItemChange } = this.props;

    if (e.keyCode === 13) {
      if (value.trim() !== '') {
        onToDoItemChange(value);
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
            ref={this.textInput}
            autoFocus
          />
        ) : (
          <span
            className={classes.list__label}
            onPointerDown={this.handleDoubleClick}
            onTouchStart={this.handleDoubleClick}
          >
            {this.props.value}
          </span>
        )}
        <span
          className={classes.customCheckbox}
          onPointerDown={this.props.onClick}
          onTouchStart={this.props.onClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24z" />
            <svg
              className={
                this.props.checked
                  ? classes['customCheckbox--mark']
                  : classes['customCheckbox--hide']
              }
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 11c2.761.575 6.312 1.688 9 3.438 3.157-4.23 8.828-8.187 15-11.438-5.861 5.775-10.711 12.328-14 18.917-2.651-3.766-5.547-7.271-10-10.917z" />
            </svg>
          </svg>
        </span>
      </React.Fragment>
    );
  }
}

export default injectSheet(style)(Checker);
