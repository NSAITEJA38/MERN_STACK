// i. product.js - Product catalog
// // Product database (simulated)
// const products = [
//   { id: 1, name: "Laptop", price: 50000, stock: 10, category: "electronics" },
//   { id: 2, name: "Phone", price: 30000, stock: 15, category: "electronics" },
//   {
//     id: 3,
//     name: "Headphones",
//     price: 2000,
//     stock: 25,
//     category: "accessories",
//   },
//   { id: 4, name: "Mouse", price: 500, stock: 50, category: "accessories" },
//   { id: 5, name: "Keyboard", price: 1500, stock: 30, category: "accessories" },
// ];

// // TODO: Implement these functions

// export function getProductById(id) {
//   // Find and return product by ID
// }

// export function getAllProducts() {
//   // Return all products
// }

// export function getProductsByCategory(category) {
//   // Filter products by category
// }

// export function searchProducts(query) {
//   // Search products by name (case-insensitive)
// }

// export function checkStock(productId, quantity) {
//   // Check if product has enough stock
//   // Return true/false
// }

// export function reduceStock(productId, quantity) {
//   // Reduce product stock after purchase
// }

export const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 10, category: "electronics" },
  { id: 2, name: "Phone", price: 30000, stock: 15, category: "electronics" },
  { id: 3, name: "Headphones", price: 2000, stock: 25, category: "accessories" },
  { id: 4, name: "Mouse", price: 500, stock: 50, category: "accessories" },
  { id: 5, name: "Keyboard", price: 1500, stock: 30, category: "accessories" },
];



export function getProductById(id) {
  // Find and return product by ID
  for(let product of products) {
    if(product.id === id) {//finding product by product id
      return product;     //returning the product if it is found
    }
  }
}
// console.log(getProductById(3));

export function getAllProducts() {
  // Return all products
  return products;//returning all products which are available
}
// console.log(getAllProducts());

export function getProductsByCategory(category) {
  // Filter products by category
  let res=[] // creating an object to store products
  for(let product of products) {
    if(product.category === category) {//if prod category matches then we push it to res
      res.push(product);
    }
  }
  return res;//finally returning the result
}
// console.log(getProductsByCategory("accessories"));

export function searchProducts(query) {
  // Search products by name (case-insensitive)
  let res=[] // creating an object for storing products
  for(let product of products) {
    if(product.name.toLocaleLowerCase() === query.toLocaleLowerCase()) {//checking if prod is present or not
      res.push(product);// if it is present then pushing it to res
    }
  }
  return res;//returning the result
}
// console.log(searchProducts("phone"));

export function checkStock(productId, quantity) {
  // Check if product has enough stock
  for(let product of products) {//traversing through products
    if(product.id === productId) {//if product id matches then checking for stock
      if(product.stock >= quantity) {//if stock is greater than or equal to quantity then returning true
        return true;
      } else {//if stock is less than quantity then returning false
        return false;
      }
    }
  // Return true/false
  }
}

export function reduceStock(productId, quantity) {
  // Reduce product stock after purchase
  for(let product of products) {//traversing through products object
    if(product.id === productId) {//if product id matches with the given productId then reducing the stockby one
      product.stock -= quantity;
    }
  }
}


