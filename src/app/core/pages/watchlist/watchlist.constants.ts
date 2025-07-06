export interface Company {
  ticker: string;
  name: string;
  market_cap: string;
  currency: string;
  price: string;
  high_price: string;
  drop_from_high: string;
  pe: number;
  daily_change: string;
  eps: number;
  sector: string;
  fair_value_gap: string;
  fair_value: string;
  attractiveness_score: number;
  moat: string;
  price_history: number[];
  price_dates: string[];
}
