import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'material-input-field',
  styleUrls: ['./material-input-field.component.scss'],
  templateUrl: './material-input-field.component.html'
})

export class MaterialInputFieldComponent {
  config;
  group: FormGroup;
}
