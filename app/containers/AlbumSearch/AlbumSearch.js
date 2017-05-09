import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Album, Notification, SearchForm } from '../../components/';
import { filterAlbums, searchAlbums } from '../../actions';

export class AlbumSearch extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    count: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.any,
    filterAlbums: PropTypes.func.isRequired,
    searchAlbums: PropTypes.func.isRequired,
  };

  handleFilterAlbums = (filterValue) => {
    this.props.filterAlbums(filterValue);
  };

  handleSearchAlbums = (e) => {
    e.preventDefault();
    const {filter} = this.props;
    if (filter) {
      this.props.searchAlbums(filter);
    }
  };

  render() {
    const {filter, items, loading, count, error} = this.props;

    return (
      <div>
        <h1>Search album</h1>
        <SearchForm
          defaultValue={filter}
          onInput={this.handleFilterAlbums}
          onSubmit={this.handleSearchAlbums}
        />
        <Notification display-if={loading} message="...loading" />
        <Notification display-if={error} message={error} />
        <Notification display-if={!count && !loading} message="Not found" />
        <div>
          {items.map(item => {
            return (
              <Album key={item.id} {...item} showSave={true} actionHandler={() => this.handleAlbumAction(item)} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    filter: state.loadedAlbums.filter,
    items: state.loadedAlbums.items,
    count: state.loadedAlbums.count,
    loading: state.loadedAlbums.loading,
    error: state.loadedAlbums.error,
    savedItems: state.savedAlbums.items,
  }),
  {
    filterAlbums,
    searchAlbums,
  }
)(AlbumSearch);
