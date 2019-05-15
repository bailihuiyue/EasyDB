class storage {
    get(key) {
        return localStorage.getItem(key);
    }

    set(key, value) {
        localStorage.setItem(key, value);
        return true;
    }

    delete(key) {
        localStorage.removeItem(key);
        return true;
    }

    clear() {
        localStorage.clear();
        return true;
    }

    readAll() {
        return localStorage;
    }
}

export default new storage();