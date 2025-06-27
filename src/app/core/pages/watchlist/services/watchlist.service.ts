import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  static getPERatioColor(pe: number | null): string {
    const num = Number(pe);
    if (pe === null || isNaN(num)) return '#EFD499';

    const min = 5;
    const max = 45;
    const clamped = Math.max(min, Math.min(num, max));
    const ratio = (clamped - min) / (max - min);

    const hue = 120 - ratio * 120; // Green → Red
    return `hsl(${hue}, 70%, 75%)`;
  }

  static getEPSColor(eps: number | null): string {
    const num = Number(eps);
    if (eps ===null || isNaN(num)) return '#EFD499';

    const min = 0;
    const max = 20;
    const clamped = Math.max(min, Math.min(num, max));
    const ratio = (clamped - min) / (max - min);

    const hue = ratio * 120; // Red → Green
    return `hsl(${hue}, 70%, 75%)`;
  }

  static getDropFromHighColor(dropStr: string): string {
    if (!dropStr || !dropStr.includes('%')) return '#EFD499';

    const value = parseFloat(dropStr.replace('%', ''));
    if (isNaN(value)) return '#EFD499';

    const min = -30;
    const max = 0;
    const clamped = Math.max(min, Math.min(value, max));
    const ratio = (clamped - max) / (min - max); // lower is better

    const hue = 120 * ratio; // Red → Green
    return `hsl(${hue}, 70%, 75%)`;
  }

  static formatMarketCap(value: number | string): string {
    const num = Number(value);
    if (isNaN(num)) return '-';

    if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
    return num.toString();
  }

  static formatPrice(value: number | string, currency: string = 'USD'): string {
    const num = Number(value);
    if (isNaN(num)) return '-';

    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  }

  static parseSortableValue(value: any): any {
    if (typeof value === 'string') {
      const cleaned = value.replace(/[^0-9,.-]/g, '').replace(',', '.');
      const num = parseFloat(cleaned);
      return isNaN(num) ? value.toLowerCase() : num;
    }
    return value;
  }
}
