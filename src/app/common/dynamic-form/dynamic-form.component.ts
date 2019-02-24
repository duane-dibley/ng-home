import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'dynamic-form',
  styleUrls: ['./dynamic-form.component.scss'],
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {
  @Input()
  config: any[] = [];

  @Output()
  formChange: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  formSubmit: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.createGroup();
    this.form.valueChanges.subscribe(formItems => this.formChange.emit(formItems));
  }

  createGroup() {
    const group = this.fb.group({});
    this.config.forEach(control => group.addControl(control.name, this.fb.control(null, null, null)));
    return group;
  }

  onSubmit() {
    this.formSubmit.emit(this.form.value);
  }
}
