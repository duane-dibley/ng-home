import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'base-input-field',
  styleUrls: ['./base-input-field.component.scss'],
  templateUrl: './base-input-field.component.html'
})

export class BaseInputFieldComponent {
  config;
  group: FormGroup;
}
