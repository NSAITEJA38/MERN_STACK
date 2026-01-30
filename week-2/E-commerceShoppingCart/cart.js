// ii. cart.js - Shopping cart operations
// import { getProductById, checkStock } from "./product.js";

// let cartItems = [];

// // TODO: Implement these functions

// export function addToCart(productId, quantity) {
//   // 1. Get product details
//   // 2. Check stock availability
//   // 3. Check if product already in cart
//   //    - If yes, update quantity
//   //    - If no, add new item
//   // 4. Return success/error message
// }

// export function removeFromCart(productId) {
//   // Remove product from cart
// }

// export function updateQuantity(productId, newQuantity) {
//   // Update quantity of product in cart
//   // Check stock before updating
// }

// export function getCartItems() {
//   // Return all cart items with product details
// }

// export function getCartTotal() {
//   // Calculate total price of all items in cart
//   // Return total
// }

// export function clearCart() {
//   // Empty the cart
// }

import { getProductById, checkStock ,products, reduceStock} from "./product.js";

let cartItems = [];

// TODO: Implement these functions

export function addToCart(productId, quantity) {
  //       1. Get product details
  //   2. Check stock availability
  //   3. Check if product already in cart
  //      - If yes, update quantity
  //      - If no, add new item
  //   4. Return success/error message
  let product=getProductById(productId);
  let availability=checkStock(productId, quantity);
  let incart=cartItems.find((item)=>{
    return item.id===productId;
  });
    if(availability){
        if(incart){
            incart.quantity+=quantity;
        } 
        else{
            cartItems.push({...product,quantity});
        }
    }
    return "Item added successfully"
}

// console.log(addToCart(3,5))

export function removeFromCart(productId) {
  // Remove product from cart
  //checking the item is present in cart or not
  let checkItem=cartItems.findIndex((item)=>{
    return item.id===productId;
  })
    if(checkItem>-1){//item is present
      cartItems.splice(checkItem, 1);//removing item from cart
      return "Item removed successfully"
    }
    else{//not present in cart
        return "Item not found"
    }
}

export function updateQuantity(productId, newQuantity) {
  // Update quantity of product in cart
  // Check stock before updating
  let availability = checkStock(productId,newQuantity)
//   console.log(availability);
  if(availability){
    let itemexist=cartItems.find((item)=>{
      return item.id===productId
    })
    if(itemexist){
      itemexist.quantity=newQuantity
      return "Quantity updated successfully"
    }
    else{
      return "Item not found in cart";
      addToCart(productId,newQuantity)
    }
  }
}
console.log(updateQuantity(2,9))

export function getCartItems(){
  // Return all cart items with product details
  return cartItems;
}

export function getCartTotal(){
  // Calculate total price of all items in cart
  // Return total
  let total=0;
  for(let item of cartItems){
    total+=item.price*item.quantity;
  }
  return total;
}

export function clearCart() {
  // Empty the cart
  cartItems=[]
  return "Cart cleared successfully";
}
