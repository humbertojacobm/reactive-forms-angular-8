import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  @Input('group') group: FormGroup;
  @Input('index') index: number;
  @Output('delete') delete$: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  delete(){
    this.delete$.emit(this.index);
  }

}
