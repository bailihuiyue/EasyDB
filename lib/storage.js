class storage {
    get(key) {
        return localStorage.getItem(this.deserialize(key));
    }

    set(key, value) {
        localStorage.setItem(key, this.serialize(value));
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

    serialize(val) {
        return JSON.stringify(val)
    }

    deserialize(val) {
        if (typeof val !== 'string') {
            return undefined
        }
        try {
            return JSON.parse(val)
        } catch (e) {
            return val || undefined
        }
    }
}

export default new storage();