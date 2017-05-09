import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Album.scss';

export default class Album extends Component {
  static propTypes = {
    showSave: PropTypes.bool,
    saved: PropTypes.bool,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    date: PropTypes.string,
    country: PropTypes.string,
    'artist-credit': PropTypes.array.isRequired,
    'label-info': PropTypes.array,
    'track-count': PropTypes.number.isRequired,
    actionHandler: PropTypes.func.isRequired,
  };

  static defaultProps = {
    showSave: false,
    saved: false
  };

  renderActionButton = () => {
    const buttonTitle = this.props.showSave ? 'Save' : 'Remove';
    return (
      <button onClick={this.props.actionHandler}>{buttonTitle}</button>
    );
  };

  renderArrayItems = (items, instanceName) => {
    if (items && items.length) {
      return items.map(item => item[instanceName].name).join(', ');
    }
    return null;
  };

  render() {
    const { saved, id, title, date, country } = this.props;
    const artists = this.props['artist-credit'];
    const labels = this.props['label-info'];
    return (
      <div className={styles.album}>
        <h3 className={styles.albumTitle}>{title} {date ? `(${date})` : ''}</h3>
        <div>id: {id}</div>
        <div>country: {country}</div>
        <div>tracks count: {this.props['track-count']}</div>
        <div>artists: {this.renderArrayItems(artists, 'artist')}</div>
        <div display-if={labels}>labels: {this.renderArrayItems(labels, 'label')}</div>
        <div className={styles.albumAction}>
          {this.renderActionButton()} {saved ? 'Album is saved' : null}
        </div>
      </div>
    );
  }
}
