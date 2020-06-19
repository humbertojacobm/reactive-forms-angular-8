import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  @Input('group') group: FormGroup;
  @Input('index') index: number;
  @Output('delete') delete$: EventEmitter<any> = new EventEmitter();
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  delete(){
    this.delete$.emit(this.index);
  }
  get pets(){
    return this.group.get('pets') as FormArray
  }
  createNewPetFormGroup(){
    return this.fb.group({
      name: [''],
      weight: ['']
    });
  }
  addPet(){
    this.pets.push(this.createNewPetFormGroup());
  }

  deletePet(value:number){
    this.pets.removeAt(value);
  }

}
