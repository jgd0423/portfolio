import React, { Component } from 'react';
import Text from '../Text/Text';
import Link from '../Link/Link';
import classes from './Navigation.module.scss';

class Navigation extends Component {
  state = {
    ishovered: false,
  };

  render() {
    return (
      <div className={classes['navigation']}>
        <Text aboutDisplayed={this.props.aboutDisplayed}>About</Text>
        <Text skillsDisplayed={this.props.skillsDisplayed}>Studies</Text>
        <Text projectDisplayed={this.props.projectDisplayed}>Projects</Text>
        <Link target='github'>Github</Link>
      </div>
    );
  }
}

export default Navigation;
