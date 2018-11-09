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
    form: FormGroup;

    @Output()
    changed: EventEmitter<any> = new EventEmitter<any>();

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.form = this.createGroup();
        this.form.valueChanges.subscribe(formItems => this.changed.emit(formItems));
    }

    createGroup() {
        const group = this.fb.group({});
        this.config.forEach(control => group.addControl(control.name, this.fb.control(null, null, null)));
        return group;
    }
}
