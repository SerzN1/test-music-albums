/* global describe, it, expect, should, jest, beforeAll, beforeEach, afterEach, document */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  getItems,
  clearItems,
  loadItem,
  saveItem,
  removeItem
} from './downloadService';

describe('Download service', () => {
  const STORAGE_KEY = 'STORED_ALBUMS';

  it('should save item', () => {
    const itemToSave = {test: 42};
    const savedItem = saveItem('test_id', itemToSave);
    expect(savedItem).toEqual(itemToSave);
  });

  it('should load item', () => {
    const itemToLoad = {test: 42};
    const loadedItem = loadItem('test_id');
    expect(loadedItem).toEqual(itemToLoad);
  });

  it('should remove item', () => {
    removeItem('test_id');
    const loadedItem = loadItem('test_id');
    expect(loadedItem).toBeUndefined();
  });

  it('should return stored items', () => {
    const itemId = 'test_id';
    const itemData = {test: 42};
    saveItem(itemId, itemData);
    const items = getItems();
    expect(items).toEqual({
      "byId": [itemId],
      "items": {[itemId]: itemData}
    });
  });

  it('should return store items keys', () => {
    const itemId = 'test_id';
    const itemData = {test: 42};
    saveItem(itemId, itemData);
    expect(localStorage.getItem(STORAGE_KEY)).toEqual(itemId);
  });

  it('should clean storage', () => {
    clearItems();
    expect(localStorage.getItem(STORAGE_KEY)).toBeUndefined();
    expect(getItems()).toEqual({
      byId: [],
      items: {}
    });
  });

});
