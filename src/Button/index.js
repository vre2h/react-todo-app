import React from 'react';

export default class Button extends React.Component {
  render() {
    return (
      <button
        className={this.props.className}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}
