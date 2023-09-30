import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cart: any[] = [];

  getCartItems() {
    return this.cart;
  }

  addItemToCart(item: any) {
    this.cart.push({ ...item, quantity: 1 });
  }

  removeItemFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  updateCartItemQuantity(index: number, quantity: number) {
    this.cart[index].quantity = quantity;
  }
}
