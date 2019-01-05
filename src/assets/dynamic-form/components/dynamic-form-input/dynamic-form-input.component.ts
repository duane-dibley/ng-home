import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'dynamic-form-input',
    styleUrls: ['./dynamic-form-input.component.scss'],
    templateUrl: './dynamic-form-input.component.html'
})
export class DynamicFormInputComponent {
    config;
    group: FormGroup;
}
