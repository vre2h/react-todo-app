import React from 'react';
import style from './style';
import injectSheet from 'react-jss';

class CreateToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleKeyDown(e) {
    const { value } = this.state;
    if (e.keyCode === 13) {
      if (value.trim() !== '') {
        this.props.onToDoItemCreate(this.state.value);
      }
    }
  }

  render() {
    const { value } = this.state;
    return (
      <input
        type="text"
        placeholder="What needs to be done"
        value={value}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}

export default injectSheet(style)(CreateToDo);
