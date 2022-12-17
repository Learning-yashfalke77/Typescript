import _ from 'lodash';
import joi from 'joi'
import Product from './product.model'
import 'reflect-metadata'
import { plainToClass } from "class-transformer";

const mySchema = joi.object({
    name: joi.string().required
})

console.log(mySchema);

console.log(_.shuffle([1, 2, 3]));

// class transformer
// npm i class-transformer reflect-metadata

const products = [
    {
        title: 'A book1',
        price: 10
    },
    {
        title: ' a book2',
        price: 20
    }
]

const loadedProducts = plainToClass(Product, products)
console.log(loadedProducts);

console.log(products);

const p1 = new Product('A book', 12.99)
p1.getInformation()


