import EasyDB from './EasyDB';
import localStorage from './storage';

let storage = {};
storage = window.indexedDB ? EasyDB : localStorage;

export default {
    get: storage.get,
    set: storage.set,
    delete: storage.delete,
    clear: storage.clear,
    readAll: storage.readAll
}