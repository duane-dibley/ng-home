import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'material-select-field',
  styleUrls: ['./material-select-field.component.scss'],
  templateUrl: './material-select-field.component.html'
})

export class MaterialSelectFieldComponent {
  config;
  group: FormGroup;
}
