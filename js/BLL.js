class Apple {
    constructor(name, isWinter) {
        this.name = name;
        this.isWinter = isWinter;
        this.isDirty = true;
        this.isRotten = false;
    }
}

class Pear {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.isDirty = true;
        this.isRotten = false;
    }
}

class Orange {
    constructor(name, country) {
        this.name = name;
        this.country = country;
        this.isDirty = true;
        this.isRotten = false;
    }
}

class Basket {
    constructor() {
        this._applesBasket = [];
        this._pearsBasket = [];
        this._orangesBasket = [];
        this.winterApplesCount = 0;
        this._dal = new LocalStorageService();

    }

    onSaveSuccess() {
        console.log('Save to LocalStorage');
    }


    save (onSaveSuccess) {
        this._dal.save(this._applesBasket, this._pearsBasket, this._orangesBasket, this.onSaveSuccess);
    }

    restoreState(callback) {
        this._dal.getSave((getSaveApple = [], getSavePear = [], getSaveOranges = []) => {
            getSaveApple.forEach((i) => this.addProduct(i));
            getSavePear.forEach((i) => this.addProduct(i));
            getSaveOranges.forEach((i) => this.addProduct(i));
            callback()
        });
    }




    addProduct(product) {
        let productName = product.constructor.name;
        let that = this;
        if (productName === 'Apple') {
            if (product.isWinter) {
                that.winterApplesCount++;
            }
            that._applesBasket.push(product);
            return that._applesBasket;
        }
        if (productName === 'Pear') {
            that._pearsBasket.push(product);
            return that._pearsBasket;
        }
        if (productName === 'Orange') {
            that._orangesBasket.push(product);
            return that._orangesBasket;
        }
    }

    clear() {
        this._applesBasket = [];
        this._pearsBasket = [];
        this._orangesBasket = [];
    }


    wash() {
        let that = this;
        for (let i = 0; i < that._applesBasket.length; i++) {
            this.isDirty = false;
        }
        for (let i = 0; i < that._pearsBasket.length; i++) {
            this.isDirty = false;
        }
        for (let i = 0; i < that._orangesBasket.length; i++) {
            this.isDirty = false;
        }
    }
};













