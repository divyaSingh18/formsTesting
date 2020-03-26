import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Child2Component } from '../child2/child2.component';


@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.css']
})
export class ParentFormComponent implements OnInit,AfterViewInit {

@ViewChild(Child2Component,{ static: true }) childComponent:Child2Component;
  public nestedForm:FormGroup= new FormGroup({
    childInfo: new FormControl("")
  })
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.nestedForm.addControl('childForm', this.childComponent.child2InfoForm);
    this.childComponent.child2InfoForm.setParent(this.nestedForm);
  }
onSubmit()
{
  console.log(this.nestedForm.value);
}
}
