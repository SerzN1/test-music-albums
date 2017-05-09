import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import styles from './Layout.scss';

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.any,
  };
  render() {
    return (
      <div className={styles.layout}>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}
