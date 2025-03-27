export interface QuoteResponse {
  [key: string]: number;
  timestamp: number;
}

export type QuoteItem = {
  stockMarket: string;
  price: number;
  timestamp: number;
  priceDown: boolean | null;
};
