//
// Automatically generated by
//     ____________ 
//    / __/_  __/ / 
//   / _/  / / / /__
//  /_/   /_/ /____/            
//
// @ts-ignore ignore unused error in generated code
import { toQueryString } from "./utils";
export interface GetSupportedCurrenciesRequest {
}

export interface GetSupportedCurrenciesResponse {
  currencyCodes: string[];
}

export interface Money {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface ConvertRequest {
  from: Money;
  toCode: string;
}


export class CurrencyClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async getSupportedCurrencies(request: GetSupportedCurrenciesRequest): Promise<GetSupportedCurrenciesResponse> {
    const response = await fetch(`${this.baseUrl}/currency/supported?${toQueryString(request)}`, {
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

  public async convert(request: ConvertRequest): Promise<Money> {
    const response = await fetch(`${this.baseUrl}/currency/convert`, {
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
