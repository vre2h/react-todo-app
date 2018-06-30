import React from 'react';
import injectSheet from 'react-jss';
import style from './style';

class Main extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <h1 className={classes.title}>todos</h1>
      </div>
    );
  }
}

export default injectSheet(style)(Main);
