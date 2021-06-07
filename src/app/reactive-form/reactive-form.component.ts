import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  detail: any = {};
  details: any = [];

  contactForm = new FormGroup({
    firstname: new FormControl(),
    
    email: new FormControl(),
    gender: new FormControl(),
   
    country: new FormControl()
  })
  
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.contactForm.value);
    this.detail = this.contactForm.value;
    this.details.push(this.detail)
  }
}
