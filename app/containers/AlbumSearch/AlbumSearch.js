import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SearchForm } from '../../components/';
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
    const {filter, items} = this.props;

    return (
      <div>
        <h1>Search album</h1>
        <SearchForm
          defaultValue={filter}
          onInput={this.handleFilterAlbums}
          onSubmit={this.handleSearchAlbums}
        />
        <div>
          {items.map(item => {
            return (
              <div key={item.id}>
                {JSON.stringify(item)}
              </div>
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
  }),
  {
    filterAlbums,
    searchAlbums
  }
)(AlbumSearch);
