import React, { Component } from 'react';

export default (defaultStore = {}, name = 'onChange') => ClassA => class extends Component {
  nextStore = {};
  onChange = obj => {
    this.nextStore = {
      ...this.nextStore,
      ...obj,
    };
    this.props[name]({
      ...defaultStore,
      ...this.props,
      ...this.nextStore,
    });
  }
  render() {
    const diffStore = {};
    Object.keys(this.nextStore).forEach(key => {
      if (key in this.props) {
        return;
      }
      diffStore[key] = this.nextStore[key];
    });
    const xprops = {
      ...defaultStore,
      ...this.props,
      [name]: this.onChange,
      ...diffStore,
    };
    return <ClassA {...xprops} />;
  }
};
