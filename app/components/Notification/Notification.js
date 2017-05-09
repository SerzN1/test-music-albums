import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.scss';

export default class Notification extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };
  render() {
    const {message} = this.props;
    return (
      <div display-if={message} className={styles.notification}>
        {message}
      </div>
    );
  }
}
