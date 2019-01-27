import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/field.interface';

@Component({
    selector: 'base-select-field',
    styleUrls: ['./base-select-field.component.scss'],
    templateUrl: './base-select-field.component.html'
})
export class BaseSelectFieldComponent implements Field {
    config;
    group: FormGroup;
}
