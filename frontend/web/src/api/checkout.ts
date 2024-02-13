// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// eslint-disable @typescript-eslint/no-unused-vars
//
// Automatically generated by
//     ____________ 
//    / __/_  __/ / 
//   / _/  / / / /__
//  /_/   /_/ /____/            
//
//
import * as builtin from "./builtin"
import * as cart from "./cart"
import * as currency from "./currency"
import * as payment from "./payment"
import * as productcatalog from "./productcatalog"
import * as shipping from "./shipping"
export interface PlaceOrderRequest {
  userId: string;
  userCurrency: string;
  address: shipping.Address;
  email: string;
  creditCard: payment.CreditCardInfo;
}

export interface OrderItem {
  item: cart.Item;
  cost: currency.Money;
}

export interface Order {
  id: string;
  shippingTrackingId: string;
  shippingCost: currency.Money;
  shippingAddress: shipping.Address;
  items: OrderItem[];
}

export interface ErrorResponse {
  message: string;
}


export class CheckoutClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async placeOrder(request: PlaceOrderRequest): Promise<Order> {
    const path = `/checkout/userID`;
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return response.json();
  }

}
