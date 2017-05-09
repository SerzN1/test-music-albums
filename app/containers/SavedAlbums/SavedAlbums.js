import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Album, Notification } from '../../components';
import {
  getSavedAlbums,
  clearSavedAlbums,
  addSavedAlbums,
  removeSavedAlbums
} from '../../actions';

export class SavedAlbums extends Component {
  static propTypes = {
    items: PropTypes.object.isRequired,
    byId: PropTypes.array.isRequired,
    getSavedAlbums: PropTypes.func.isRequired,
    clearSavedAlbums: PropTypes.func.isRequired,
    addSavedAlbums: PropTypes.func.isRequired,
    removeSavedAlbums: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.getSavedAlbums();
  }

  handleItemRemove = (id) => {
    this.props.removeSavedAlbums(id);
  };

  render() {
    const {items, byId} = this.props;

    return (
      <div>
        <h1>Saved albums</h1>
        <div style={{marginBottom: '10px'}}>
          <button onClick={this.props.clearSavedAlbums} type="button" disabled={!byId.length}>Clear all saved albums</button>
        </div>
        <Notification display-if={!byId.length} message="Saved albums not found" />
        <div>
          {byId.map(id => (
            <Album key={id} {...items[id]} actionHandler={() => this.handleItemRemove(id)} />
          ))}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    items: state.savedAlbums.items,
    byId: state.savedAlbums.byId
  }),
  {
    getSavedAlbums,
    clearSavedAlbums,
    addSavedAlbums,
    removeSavedAlbums
  }
)(SavedAlbums);
