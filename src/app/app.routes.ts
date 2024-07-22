import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'groupBy', pathMatch: 'full' },

  /*---------------------------------------------------------------------------
                              Aggregate Component
  ---------------------------------------------------------------------------*/
  { path: 'groupBy' },
];
