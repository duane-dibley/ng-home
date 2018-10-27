import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormInputComponent } from './components/dynamic-form-input/dynamic-form-input.component';
import { DynamicFormSelectComponent } from './components/dynamic-form-select/dynamic-form-select.component';
//
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';

@NgModule({
    declarations: [
        DynamicFieldDirective,
        DynamicFormComponent,
        DynamicFormInputComponent,
        DynamicFormSelectComponent,
    ],
    entryComponents: [
        DynamicFormInputComponent,
        DynamicFormSelectComponent,
    ],
    exports: [DynamicFormComponent],
    imports: [CommonModule, ReactiveFormsModule],
})

export class DynamicFormModule { }
