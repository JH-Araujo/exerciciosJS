class Product{
    constructor(name, description, price) {
        this.name = name
        this.description = description 
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity){
        this.inStock += quantity
    }

    calculateDescount(discount){
        return this.price * ((100 - discount) / 100)
    }
}

const watch = new Product("Relogio De Pulso", "...", 80)
watch.addToStock(99)
const priceWithDiscount = watch.calculateDescount(15)

console.log(watch)
console.log(priceWithDiscount)
console.log(watch.calculateDescount(10))