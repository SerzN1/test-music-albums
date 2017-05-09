const STORAGE_KEY = 'STORED_ALBUMS';

const savedIdsString = localStorage.getItem(STORAGE_KEY);
let savedIds = savedIdsString ? savedIdsString.split(',') : [];

export function saveItem(id, item) {
  if (!savedIds.includes(id)) {
    savedIds.push(id);
    localStorage.setItem(id, JSON.stringify(item));
    localStorage.setItem(STORAGE_KEY, savedIds.toString());
  }
  return item;
}

export function loadItem(id) {
  const itemString = localStorage.getItem(id);
  return itemString ? JSON.parse(itemString) : undefined;
}

export function removeItem(id) {
  savedIds = savedIds.filter(savedId => savedId !== id);
  localStorage.removeItem(id);
  localStorage.setItem(STORAGE_KEY, savedIds.toString());
  return id;
}

export function getItems() {
  const items = {};
  savedIds.forEach(itemId => {
    items[itemId] = loadItem(itemId);
  });
  return {
    byId: savedIds,
    items
  };
}

export function clearItems() {
  localStorage.removeItem(STORAGE_KEY);
  savedIds = [];
  return {
    byId: [],
    items: {}
  };
}
