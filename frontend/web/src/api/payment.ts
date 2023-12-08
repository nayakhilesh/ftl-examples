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
import * as currency from "./currency"
export interface CreditCardInfo {
  number: string;
  cVV: number;
  expirationYear: number;
  expirationMonth: number;
}

export interface ChargeRequest {
  amount: currency.Money;
  creditCard: CreditCardInfo;
}

export interface ChargeResponse {
  transactionID: string;
}


export class PaymentClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async charge(request: ChargeRequest): Promise<ChargeResponse> {
    const path = `/payment/charge`;
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
