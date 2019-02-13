import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatSelectModule } from '@angular/material';
//
import { DynamicFormComponent } from './dynamic-form.component';
import { BaseInputFieldComponent } from './components/base-input-field/base-input-field.component';
import { BaseSelectFieldComponent } from './components/base-select-field/base-select-field.component';
import { MaterialInputFieldComponent } from './components/material-input-field/material-input-field.component';
import { MaterialSelectFieldComponent } from './components/material-select-field/material-select-field.component';
//
import { FieldGeneratorDirective } from './directives/field-generator.directive';

@NgModule({
  declarations: [
    FieldGeneratorDirective,
    //
    BaseInputFieldComponent,
    BaseSelectFieldComponent,
    DynamicFormComponent,
    MaterialInputFieldComponent,
    MaterialSelectFieldComponent
  ],
  entryComponents: [
    BaseInputFieldComponent,
    BaseSelectFieldComponent,
    MaterialInputFieldComponent,
    MaterialSelectFieldComponent
  ],
  exports: [
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
})

export class DynamicFormModule { }
