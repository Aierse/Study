interface SStorage<T> {
    [key:string]: T
}

class LocalStorage<T> {
    private storage: SStorage<T> = {}

    set(key:string, value: T) {
        if (this.storage[key] === undefined) {
            this.storage[key] = value
        }
        else {
            console.log("Error : defined key")
        }
    }

    remove(key:string) {
        delete this.storage[key]
    }

    get(key:string): T {
        return this.storage[key]
    }

    clear() {
        this.storage = {}
    }
}

const stringsStorage = new LocalStorage<string>()

stringsStorage.get("ket")

const booleansStorage = new LocalStorage<boolean>()
booleansStorage.get("xxx")