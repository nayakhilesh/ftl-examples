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
export interface Item {
  productId: string;
  quantity: number;
}

export interface AddItemRequest {
  userId: string;
  item: Item;
}

export interface AddItemResponse {
}

export interface GetCartRequest {
  userId: string;
}

export interface Cart {
  userId: string;
  items: Item[];
}

export interface EmptyCartRequest {
  userId: string;
}

export interface EmptyCartResponse {
}


export class CartClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async addItem(request: AddItemRequest): Promise<AddItemResponse> {
    const path = `/cart/add`;
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

  public async getCart(request: GetCartRequest): Promise<Cart> {
    const path = `/cart?@json=${encodeURIComponent(JSON.stringify(request))}`;
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return response.json();
  }

  public async emptyCart(request: EmptyCartRequest): Promise<EmptyCartResponse> {
    const path = `/cart/empty`;
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
