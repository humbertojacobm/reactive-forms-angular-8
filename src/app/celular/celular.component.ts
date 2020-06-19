import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-celulars',
  templateUrl: './celular.component.html',
  styleUrls: ['./celular.component.scss']
})
export class CelularComponent implements OnInit {
  @Input('form') form: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form.addControl('celulares',this.fb.array([]));
  }
  get cells(){
    return this.form.get('celulares') as FormArray;
  }
  addCell(){
    this.cells.push(this.getNewCelular())
  }

  deleteCel(index: number){
    this.cells.removeAt(index);
  }

  private getNewCelular() {
    return this.fb.group({
      suppliers: [''],
      number: ['']
    });
  }
}
