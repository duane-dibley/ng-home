import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
//
import { DynamicFormInputComponent } from '../dynamic-form-input/dynamic-form-input.component';
import { DynamicFormSelectComponent } from '../dynamic-form-select/dynamic-form-select.component';
//
import { Field } from '../../models/field.interface';

const components = {
    input: DynamicFormInputComponent,
    select: DynamicFormSelectComponent
};

@Directive({
    selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {
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
        const component = components[this.config.type];
        const factory = this.resolver.resolveComponentFactory<any>(component);

        this.component = this.container.createComponent(factory);
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
    }
}
