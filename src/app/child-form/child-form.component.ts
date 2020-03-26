import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor,FormControl, NG_VALUE_ACCESSOR,NG_VALIDATORS,
   FormGroup, Validator,Validators, AbstractControl, ValidationErrors } from "@angular/forms";

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.css'],
  providers: [
    {
   provide: NG_VALUE_ACCESSOR,
   useExisting: forwardRef(() => ChildFormComponent),
   multi: true
 },
  {
   provide: NG_VALIDATORS,
   useExisting: forwardRef(() => ChildFormComponent),
   multi: true
 }
]
})
export class ChildFormComponent implements OnInit, ControlValueAccessor, Validator {

  public childInfoForm: FormGroup = new FormGroup(
    {
  fname: new FormControl("", [Validators.required]),
  
  });
  constructor() { }

  ngOnInit() {
  }
  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    val && this.childInfoForm.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    
    this.childInfoForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    
    this.onTouched = fn;
  }
  validate(c: AbstractControl): ValidationErrors | null{
    
    return this.childInfoForm.valid ? null : { invalidForm: {valid: false, message: "childInfoForm fields are invalid"}};
  }

}
