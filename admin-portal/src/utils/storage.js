const STORAGE_KEY = 'admin_portal_data_v1';

export function loadStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.error('Failed to parse storage', e);
    return null;
  }
}

export function saveStorage(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function ensureStorageInitialized(seedFn) {
  let data = loadStorage();
  if (!data) {
    data = seedFn();
    saveStorage(data);
  }
  return data;
}

export function updateStorage(mutator) {
  const current = loadStorage() || {};
  const next = mutator({ ...current });
  saveStorage(next);
  return next;
}