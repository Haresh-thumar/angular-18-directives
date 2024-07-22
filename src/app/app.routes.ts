import { Routes } from '@angular/router';
import { AppCustomNgIfComponent } from './components/structural-compo/customNgIf.component';
import { AppCustomNgForComponent } from './components/structural-compo/customNgFor.component';

export const routes: Routes = [
  { path: '', redirectTo: 'CustomNgFor', pathMatch: 'full' },

  /*---------------------------------------------------------------------------
                              Structural Directive
  ---------------------------------------------------------------------------*/
  { path: 'CustomNgIf', component: AppCustomNgIfComponent },
  { path: 'CustomNgFor', component: AppCustomNgForComponent },
];
