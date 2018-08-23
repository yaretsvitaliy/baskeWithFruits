class LocalStorageService {
    constructor() {
    }

    save(Apple, Pear, Orange, successCallback) {
        let serializedValueApple = JSON.stringify(Apple);
        localStorage.setItem('apples', serializedValueApple);
        let serializedValuePears = JSON.stringify(Pear);
        localStorage.setItem('pears', serializedValuePears);
        let serializedValueOranges = JSON.stringify(Orange);
        localStorage.setItem('oranges', serializedValueOranges);
        successCallback();
    }

    getSave(getSaveCallback) {

        let getSaveApple = localStorage.getItem('apples');
        let getSavePear = localStorage.getItem('pears');
        let getSaveOranges = localStorage.getItem('oranges');
        let newApples;
        let newPears;
        let newOrange;
        if (!!getSaveApple, !!getSavePear, !!getSaveOranges) {
            newApples = JSON.parse(getSaveApple).map((i) => new Apple(i.name, i.isWinter));
            newPears = JSON.parse(getSavePear).map((i) => new Pear(i.name));
            newOrange = JSON.parse(getSaveOranges).map((i) => new Orange(i.name));

        }
        getSaveCallback(newApples, newPears, newOrange);
    }
}



