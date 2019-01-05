import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/field.interface';

@Component({
    selector: 'dynamic-form-select',
    styleUrls: ['./dynamic-form-select.component.scss'],
    templateUrl: './dynamic-form-select.component.html'
})
export class DynamicFormSelectComponent implements Field {
    config;
    group: FormGroup;
}
