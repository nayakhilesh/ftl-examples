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
    const path = `/currency/supported?@json=${encodeURIComponent(JSON.stringify(request))}`;
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

  public async convert(request: ConvertRequest): Promise<Money> {
    const path = `/currency/convert`;
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
