import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CompanyDetailsHttpService } from '../services/company-details-http.service';
import { ActivatedRouteSnapshot } from '@angular/router';

export const CompanyDetailsResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot) => {
  const companyDetailsHttpService = inject(CompanyDetailsHttpService);
  const ticker = route.paramMap.get('ticker'); // <- get ticker from route

  if (!ticker) {
    throw new Error('No ticker provided in route.');
  }

  return companyDetailsHttpService.getCompanyData(ticker);
};
