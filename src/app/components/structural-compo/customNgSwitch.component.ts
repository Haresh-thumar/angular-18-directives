import { Component } from '@angular/core';
import { CustomNgSwitchDirective } from '../../directives/structural/customNgSwitch.directive';

@Component({
  selector: 'app-CustomNgSwitch',
  standalone: true,
  imports: [CustomNgSwitchDirective],
  template: `
    <!-------------- CustomNgFor Pipe ---------------->
    <div class="three">
      <h1 class="heading">CustomNgFor Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <div [appCustomNgSwitch]="currentView">
        <ng-template #caseTemplate let-case="'home'">
          <h1>Home View</h1>
        </ng-template>
        <ng-template #caseTemplate let-case="'about'">
          <h1>About View</h1>
        </ng-template>
        <ng-template #defaultTemplate>
          <h1>Default View</h1>
        </ng-template>
      </div>
    </div>

    <button (click)="changeView('home')">Home</button>
    <button (click)="changeView('about')">About</button>
    <button (click)="changeView('other')">Other</button>
  `,
})
export class AppCustomNgSwitchComponent {
  currentView = 'home';

  changeView(view: string) {
    this.currentView = view;
  }
}
