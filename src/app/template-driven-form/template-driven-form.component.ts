import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  details: any = [];
  value: any = {};
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(contactForm: any) {
    this.value = contactForm.value;
    this.details.push(this.value)
  }
}
