import React from 'react';
import style from './style';
import injectSheet from 'react-jss';
// import PropTypes from 'prop-types';

class CreateToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleClick(e) {
    const { value } = this.state;
    if (value.trim() !== '') {
      this.setState({ value: '' });
      this.props.onToDoItemCreate(this.state.value);
    }
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.handleClick();
    }
  }

  render() {
    const { value } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {this.props.hasToDo ? (
          <input type="checkbox" className={classes.toggleAll} />
        ) : null}
        <input
          className={classes.input}
          type="text"
          placeholder="What needs to be done"
          value={value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <button
          className={classes.button}
          disabled={value.trim() === ''}
          onClick={this.handleClick}
        >
          Create
        </button>
      </div>
    );
  }
}

export default injectSheet(style)(CreateToDoItem);
