//
// Automatically generated by
//     ____________ 
//    / __/_  __/ / 
//   / _/  / / / /__
//  /_/   /_/ /____/            
//
// @ts-ignore ignore unused error in generated code
import { toQueryString } from "./utils";
export interface Item {
  productID: string;
  quantity: number;
}

export interface AddItemRequest {
  userID: string;
  item: Item;
}

export interface AddItemResponse {
}

export interface GetCartRequest {
  userID: string;
}

export interface Cart {
  userID: string;
  items: Item[];
}

export interface EmptyCartRequest {
  userID: string;
}

export interface EmptyCartResponse {
}


export class CartClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async addItem(request: AddItemRequest): Promise<AddItemResponse> {
    const response = await fetch(`${this.baseUrl}/cart/add`, {
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
    const response = await fetch(`${this.baseUrl}/cart?${toQueryString(request)}`, {
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
    const response = await fetch(`${this.baseUrl}/cart/empty`, {
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
