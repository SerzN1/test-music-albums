import React, { Component } from 'react';
import { connect } from 'react-redux';

export class BaseContainer extends Component {
  render() {
    return (
      <div>
        <h1>Base route</h1>
      </div>
    );
  }
}

export default connect(
  () => ({})
)(BaseContainer);
