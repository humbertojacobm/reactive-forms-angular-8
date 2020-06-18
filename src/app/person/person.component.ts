import { Component, OnInit } from '@angular/core';
import {FormBuilder,
       FormControl,
       FormGroup,
       Validators,
       Form,
       FormArray} from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

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
        this.getNewAliasControl()
      ]),
      cars: this.fb.array([
        this.getNewCardFormGroup()
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

  //aliases
  get aliases(){
    return this.form.get('aliases') as FormArray;
  }

  addAlias(){
    this.aliases.push(this.getNewAliasControl());
  }

  private getNewAliasControl() {
    return this.fb.control('', Validators.required);
  }

  //cars
  get cars(){
    return this.form.get('cars') as FormArray;
  }

  addCars(){
    this.cars.push(this.getNewCardFormGroup())
  }

  private getNewCardFormGroup() {
    return this.fb.group(
      {
        color: [''],
        plate: [''],
        gatesNumer: [''],
        pets: this.fb.array([

        ])
      }
    );
  }

  updateProfile(){
    this.form.patchValue({
      firstName: 'Nancy',
      address: {
         street: '123 Drew Street'
      }
    })
  }

  deleteAlias(value: number){
    this.aliases.removeAt(value);
  }

  deleteCar(value: number){
    this.cars.removeAt(value);
  }


}
