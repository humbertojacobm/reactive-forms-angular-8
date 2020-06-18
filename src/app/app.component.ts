import { Component, OnInit } from '@angular/core';
import {FormBuilder,
       FormControl,
       FormGroup,
       Validators,
       Form,
       FormArray} from '@angular/forms';

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
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
      aliases: this.fb.array([
        this.fb.control('')
      ]),
      cars: this.fb.array([
        this.fb.group({
          color: [''],
          plate: [''],
          gatesNumer: ['']
        })
      ])
    })

  }

  onSubmit(){
  // TODO Use EventEmitter with form value
  console.log('submit',this.form.value);
  }

  get formValue(){
    return this.form.value
  }

  get aliases(){
    return this.form.get('aliases') as FormArray;
  }

  addAlias(){
    this.aliases.push(this.fb.control(''));
  }

  get cars(){
    return this.form.get('cars') as FormArray;
  }

  addCars(){
    this.cars.push(this.fb.group(
      {
        color: [''],
        plate: [''],
        gatesNumer: ['']
      }
    ))
  }

  updateProfile(){
    this.form.patchValue({
      firstName: 'Nancy',
      address: {
         street: '123 Drew Street'
      }
    })
  }

}
