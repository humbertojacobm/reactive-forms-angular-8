import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss']
})
export class PhotoItemComponent implements OnInit {

  @Input('form-group') formGroup: FormGroup;
  @Input('index') index: number;
  @Output('delete') delete$: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  delete(){
    this.delete$.emit(this.index);
  }

}
