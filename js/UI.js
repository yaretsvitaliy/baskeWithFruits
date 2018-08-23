class BasketView {
    constructor(elementID) {
        this.elementID = elementID;
        this.basket = new Basket();
        this.render();
        this.clearAll();
        this.addNewFruitOnBasket();
        this.saveFructs();
        // this.basket.getSave((apple) => {
        //     console.log(apple);
        // })
        this.restoreState();
    }

    render(elementID) {
        let elem = document.querySelector(`#${this.elementID}`);
        elem.innerHTML = `<div class="container">
            <select class="fructs">
                <option id="Apple" value="Apple">Apple</option>
                <option id="Pear" value="Pear">Pear</option>
                <option id="Orange" value="Orange">Orange</option>
            </select>
                <button id="createButton" class="createButton">Create</button>
                <button id="saveButton" class="saveButton">Save</button>
                <button id="clearButton" class="clearButton">Clear</button>
            <hr>
            <div class="properties">
                <label>Name:</label>
                <input id="nameFruct">
            </div>
                <div class="properties">
                <label>isWinter:</label>
        <input id="isWinter" type="checkbox">
            </div>
            <hr>
            </div>
            <div id="basketContent" class="basketContent"></div>`;
    }

    renderBasket() {
        let contentBasket = document.querySelector('#basketContent');

        if (this.basket._applesBasket.length === 0 && this.basket._orangesBasket.length === 0 && this.basket._pearsBasket.length === 0) {
            contentBasket.innerHTML = "Basket is Empty";
        } else {
            let newArrayApple = this.basket._applesBasket.map((i, index) => `<li> ${index + 1}. ${i.name}</li>`);
            let newArrayPear = this.basket._pearsBasket.map((i, index) => `<li> ${index + 1}. ${i.name}</li>`);
            let newArrayOrange = this.basket._orangesBasket.map((i, index) => `<li> ${index + 1}. ${i.name}</li>`);
            contentBasket.innerHTML = `Apples: ${newArrayApple.join('')} Pears: ${newArrayPear.join('')} Orange: ${newArrayOrange.join('')}`;
        }
    }

    create() {
        let select = document.querySelector('select');
        let optionSelect = select.options[select.selectedIndex].value;
        // console.log(optionSelect);
        let check = document.querySelector('#isWinter').checked;
        let productName = document.querySelector('#nameFruct');

        switch (optionSelect) {
            case 'Apple':
                let newApple = new Apple(productName.value, check);
                this.basket.addProduct(newApple);
                productName.value = '';
                break;
            case 'Pear':
                let newPear = new Pear(productName.value);
                this.basket.addProduct(newPear);
                productName.value = '';
                break;
            case 'Orange':
                let newOrange = new Orange(productName.value);
                this.basket.addProduct(newOrange);
                productName.value = '';
                break;
        }
    }

    addNewFruitOnBasket() {
        let createBtn = document.querySelector('#createButton');
        createBtn.addEventListener('click', this.create.bind(this));
        createBtn.addEventListener('click', this.renderBasket.bind(this));
    }


    saveFructs() {
        let saveButton = document.querySelector('#saveButton');
        saveButton.addEventListener('click', this.basket.save.bind(this.basket));
    }

    restoreState() {
        this.basket.restoreState(this.onRestore.bind(this));
    }

    onRestore() {
        this.renderBasket();
    }

    clearAll() {
        let clearButton = document.querySelector('#clearButton');
        clearButton.addEventListener('click', this.basket.clear.bind(this.basket));
        clearButton.addEventListener('click', this.renderBasket.bind(this));
    }
}




