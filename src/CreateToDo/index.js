import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import Button from '../Button';

import style from './style';

class CreateToDoItem extends React.Component {
  static propTypes = {
    length: PropTypes.number,
    onToDoItemCreate: PropTypes.func
  };

  static defaultProps = {
    name: 'Stranger'
  };

  constructor(props) {
    super(props);
    this.state = {
      todo: {
        value: '',
        isComplete: false
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      todo: {
        value: e.target.value,
        isComplete: false
      }
    });
  }

  handleClick(e) {
    const { value } = this.state.todo;
    if (value.trim() !== '') {
      this.setState({
        todo: {
          value: '',
          isComplete: false
        }
      });
      this.props.onToDoItemCreate(this.state.todo);
    }
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.handleClick();
    }
  }

  render() {
    const { value } = this.state.todo;
    const { classes, length } = this.props;

    return (
      <div className={classes.root}>
        <input
          type="checkbox"
          className={
            length > 0
              ? classes['toggleAll-down'] + ' ' + classes['toggleAll']
              : classes.toggleAll
          }
        />
        <input
          className={classes.input}
          type="text"
          placeholder="What needs to be done..."
          value={value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <Button
          className={classes.button}
          disabled={value.trim() === ''}
          onClick={this.handleClick}
          value="Add"
        />
      </div>
    );
  }
}

export default injectSheet(style)(CreateToDoItem);
