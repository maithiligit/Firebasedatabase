import React, {Component} from 'react';

import {AuthNavigator} from './app/src/scenes/Navigation/AuthNavigator';
export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <AuthNavigator />;
  }
}
