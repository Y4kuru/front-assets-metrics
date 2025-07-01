import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompanyDetailsService {

  static parseSortableValue(value: any): any {
    if (typeof value === 'string') {
      const cleaned = value.replace(/[^0-9,.-]/g, '').replace(',', '.');
      const num = parseFloat(cleaned);
      return isNaN(num) ? value.toLowerCase() : num;
    }
    return value;
  }
}
