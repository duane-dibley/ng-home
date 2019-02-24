import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'material-submit-field',
  styleUrls: ['./material-submit-field.component.scss'],
  templateUrl: './material-submit-field.component.html'
})

export class MaterialSubmitFieldComponent {
  config;
  group: FormGroup;
}
