class ProductManager {
  constructor(products) {
    this.products = products; // array of product objects
  }

  listAll() {
    this.products.forEach(p => {
      console.log(`${p.name}: $${p.price}`);
    });
  }

  getNames() {
    return this.products.map(p => p.name);
  }

  filterByPrice(minPrice) {
    return this.products.filter(p => p.price >= minPrice);
  }

  totalValue() {
    return this.products.reduce((sum, p) => sum + p.price, 0);
  }

  hasExpensiveProduct(threshold) {
    return this.products.some(p => p.price > threshold);
  }

  findByName(name) {
    return this.products.find(p => p.name === name);
  }
}
