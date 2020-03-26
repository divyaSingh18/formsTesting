import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  public child2InfoForm:FormGroup= new FormGroup({
    phn: new FormControl("")
  })
  constructor() { }

  ngOnInit() {
  }

}
