import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import '../styles/main.scss';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object
  };

  render() {
    return (
      <Layout>
        { this.props.children }
      </Layout>
    );
  }
}
