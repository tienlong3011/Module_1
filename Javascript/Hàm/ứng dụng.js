class ProductList {
    constructor(_name,_price,_note) {
        this.name = _name;
        this.price =_price;
        this.note = _note;
    }
    getName(){
        return this.name;
    }
    getPrice(){
        return this.price;
    }
    getNote(){
        return this.note;
    }
    setName(newName){
        this.name = newName;
    }
    setPrice(newPrice) {
        this.name = newPrice;
    }
    setNote(newNote){
        this.name = newNote;
    }
}