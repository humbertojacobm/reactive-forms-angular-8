import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, Form} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'reactive-forms';
  form: FormGroup;
  constructor(
    private fb: FormBuilder
  ){
  }

  ngOnInit(): void {

    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      address: this.fb.group({
        address1: [''],
        address2: [''],
        state: [''],
        zip: ['']
      }),
      mobiles: this.fb.array([])
    })

  }

}
