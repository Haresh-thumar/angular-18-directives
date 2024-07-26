import { Routes } from '@angular/router';
import { AppCustomNgIfComponent } from './components/structural-compo/customNgIf.component';
import { AppCustomNgForComponent } from './components/structural-compo/customNgFor.component';
import { AppCustomNgStyleComponent } from './components/attribute-compo/customNgStyle.component';
import { AppCustomNgClassComponent } from './components/attribute-compo/customNgClass.component';
import { AppCustomNgSwitchComponent } from './components/structural-compo/customNgSwitch.component';
import { AppAcceptAlphabetCharOnlyComponent } from './components/custom-compo/acceptAlphabetCharOnly.component';
import { AppAlphaNumSpaceTrimComponent } from './components/custom-compo/alphanumericSpaceTrim.component';

export const routes: Routes = [
  { path: '', redirectTo: 'alphaNumSpaceTrim', pathMatch: 'full' },

  /*---------------------------------------------------------------------------
                              Structural Directive
  ---------------------------------------------------------------------------*/
  { path: 'CustomNgIf', component: AppCustomNgIfComponent },
  { path: 'CustomNgFor', component: AppCustomNgForComponent },
  { path: 'CustomNgSwitch', component: AppCustomNgSwitchComponent },

  /*---------------------------------------------------------------------------
                              Attribute Directive
  ---------------------------------------------------------------------------*/
  { path: 'CustomNgStyle', component: AppCustomNgStyleComponent },
  { path: 'CustomNgClass', component: AppCustomNgClassComponent },

  /*---------------------------------------------------------------------------
                              Custom Directive
  ---------------------------------------------------------------------------*/
  {
    path: 'acceptAlphabetCharOnly',
    component: AppAcceptAlphabetCharOnlyComponent,
  },
  {
    path: 'alphaNumSpaceTrim',
    component: AppAlphaNumSpaceTrimComponent,
  },
];
