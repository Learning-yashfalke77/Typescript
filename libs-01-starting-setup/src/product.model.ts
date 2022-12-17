export default class Product {
    title: string;
    price: number;

    constructor(t: string, n: number) {
        this.title = t
        this.price = n
    }

    getInformation() {
        return [this.title, `${this.price}`]
    }
}