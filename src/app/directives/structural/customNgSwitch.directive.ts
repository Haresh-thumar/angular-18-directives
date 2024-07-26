import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  ContentChild,
  AfterContentInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appCustomNgSwitch]',
  standalone: true,
})
export class CustomNgSwitchDirective implements AfterContentInit, OnChanges {
  @Input() appCustomNgSwitch: any;

  @ContentChild('caseTemplate', { static: false })
  caseTemplates!: TemplateRef<any>;
  @ContentChild('defaultTemplate', { static: false })
  defaultTemplate!: TemplateRef<any>;

  private cases = new Map<any, TemplateRef<any>>();

  constructor(private viewContainer: ViewContainerRef) {}

  ngAfterContentInit() {
    if (this.caseTemplates) {
      const context = (this.caseTemplates as any).ngTemplateContextGuard;
      if (context) {
        this.cases.set(context, this.caseTemplates);
      }
    }
    this.updateView();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('appCustomNgSwitch' in changes) {
      this.updateView();
    }
  }

  private updateView(): void {
    this.viewContainer.clear();

    const selectedTemplate =
      this.cases.get(this.appCustomNgSwitch) || this.defaultTemplate;

    if (selectedTemplate) {
      this.viewContainer.createEmbeddedView(selectedTemplate);
    }
  }
}
