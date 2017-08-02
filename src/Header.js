import React, { Component } from 'react';
import Filter from './Filter';

export default class Header extends Component {
  render() {
    return (
      <div className="headerBar">
        <span className="headerBar-title">Women's Tops</span>
        <Filter {...this.props} />
      </div>
    );
  }
}
