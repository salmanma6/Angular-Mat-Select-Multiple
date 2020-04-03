import { Component, ViewChild, ElementRef, forwardRef, EventEmitter, Output } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { VERSION } from '@angular/material';
import { MatSelectChange, MatSelect } from '@angular/material/select';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppComponent),
      multi: true
    }
  ]
})
export class AppComponent {
  public poemForm: FormGroup;
  animationTypes = [
    { name: 'balloon' },
    { name: 'kite' },
    { name: 'wolf' }
  ];

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.poemForm = this.fb.group({
      animationType: ['', [Validators.required]],
    });
    let defaultValues=this.animationTypes.slice(0,2);
    this.poemForm.controls['animationType'].setValue(defaultValues);
  }

  reset() {
    this.poemForm.reset();
  }
}