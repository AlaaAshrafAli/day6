import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  removeItem(index: number) {
    this.cartService.removeItemFromCart(index);
  }

  updateQuantity(index: number, quantity: number) {

    this.cartService.updateCartItemQuantity(index, quantity);
    const item = this.cartItems[index];
  if (quantity >= 1 && quantity <= item.stock) {
    this.cartService.updateCartItemQuantity(index, quantity);
  } else if (quantity > item.stock) {
    this.cartService.updateCartItemQuantity(index, item.stock);
  }
  }
}



