import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
//
import { BaseInputFieldComponent } from '../components/base-input-field/base-input-field.component';
import { BaseSelectFieldComponent } from '../components/base-select-field/base-select-field.component';
//
import { Field } from '../models/field.interface';

const components = {
  input: BaseInputFieldComponent,
  select: BaseSelectFieldComponent
};

@Directive({
  selector: '[dynamicField]'
})

export class BaseFieldGeneratorDirective implements OnInit {
  @Input()
  config;

  @Input()
  group: FormGroup;
  component: ComponentRef<Field>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnInit() {
    const component = components[this.config.type],
      factory = this.resolver.resolveComponentFactory<any>(component);

    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
}
