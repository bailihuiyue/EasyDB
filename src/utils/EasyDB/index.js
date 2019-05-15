import easyDB from './easyDB';
import localStorage from './storage';

let storage = {};
storage = window.indexedDB ? easyDB : localStorage;

export default storage;