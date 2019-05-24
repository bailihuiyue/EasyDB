import easyDB from './easyDB';
import localStorage from './storage';

let storage = {};
storage = window.indexedDB ? easyDB : localStorage;

export default {
    get: storage.get,
    set: storage.set,
    delete: storage.delete,
    clear: storage.clear,
    readAll: storage.readAll
}