import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { RealtHttpService } from '../services/realt-http.service';

export const RealtResolver: ResolveFn<{ cto: any[]; pea: any[] }> = () => {
  const realtHttpService = inject(RealtHttpService);
  return realtHttpService.loadRealtRentsData();
};
