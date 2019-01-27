import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//
import { DynamicFormComponent } from './dynamic-form.component';
import { BaseInputFieldComponent } from './components/base-input-field/base-input-field.component';
import { BaseSelectFieldComponent } from './components/base-select-field/base-select-field.component';
//
import { BaseFieldGeneratorDirective } from './directives/base-field-generator.directive';

@NgModule({
    declarations: [
        BaseFieldGeneratorDirective,
        //
        BaseInputFieldComponent,
        BaseSelectFieldComponent,
        DynamicFormComponent
    ],
    entryComponents: [
        BaseInputFieldComponent,
        BaseSelectFieldComponent,
    ],
    exports: [DynamicFormComponent],
    imports: [CommonModule, ReactiveFormsModule],
})

export class DynamicFormModule { }
