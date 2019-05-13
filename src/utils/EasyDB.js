class EasyDB {
    constructor(options) {
        let { dbName = 'EasyDB', version = 1 } = options || {}
        let DBOpenRequest = {};
        this.inited = false;
        this.dbName = dbName;
        this.version = version;
        this.db = {};
        this.DBOpenRequest = indexedDB.open(dbName, version);
        this.inited = this.initDB();
    }

    initDB() {
        if (!this.inited) {
            let that = this;
            this.DBOpenRequest.onsuccess = (event) => {
                that.db = that.DBOpenRequest.result;
            };

            this.DBOpenRequest.onupgradeneeded = (event) => {
                var db = event.target.result;

                db.onerror = function (event) {
                    throw new Error(`[EasyDB]: Open DB Error`)
                };

                var objectStore = db.createObjectStore(this.dbName, {
                    keyPath: 'key',
                    autoIncrement: false
                });
                objectStore.createIndex('key', 'key');
                objectStore.createIndex('value', 'value');
            };
            return true;
        }
    }

    transaction() {
        return this.db.transaction(this.dbName, "readwrite").objectStore(this.dbName);
    }

    async set(key, value) {
        const val = await this.get(key);
        if (!val) {
            return await this.add({ key, value });
        } else {
            return await this.put({ key, value });
        }
    }

    async get(key) {
        return new Promise((resolve, reject) => {
            const transaction = this.transaction().get(key);
            this.dbCallback(transaction, (data) => {
                resolve(data);
            });
        })
    }

    put({ key, value }) {
        return new Promise((resolve, reject) => {
            const transaction = this.transaction().put({ key, value });
            this.dbCallback(transaction, (data) => {
                resolve(data);
            });
        })
    }

    add(key, value) {
        return new Promise((resolve, reject) => {
            const transaction = this.transaction().add({ key, value });
            this.dbCallback(transaction, (data) => {
                resolve(data);
            });
        })
    }

    delete(key) {
        return this.transaction().delete(key);
    }

    readAll() {
        return new Promise((resolve, reject) => {
            const transaction = this.transaction();
            let data = [];
            transaction.openCursor().onsuccess = function (event) {
                const cursor = event.target.result;
                if (cursor) {
                    data.push(cursor.value);
                    cursor.continue();
                } else {
                    resolve(data);
                }
            };
        })
    }

    dbCallback(transaction, cb) {
        transaction.onsuccess = (event) => {
            cb(event.target.result.value || event.target.result);
        };
        transaction.onerror = (event) => {
            throw new Error(`${this.dbName} Error:${event.target.error}`);
        }
    }
    promise(fun) {
        return new Promise((resolve, reject) => {
            fun(resolve, reject);
        });
    }
}

let DB = null;
if (!DB) {
    DB = new EasyDB()
}
export default DB