import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  Form,
  FormArray} from '@angular/forms';


@Component({
  selector: 'app-alias',
  templateUrl: './alias.component.html',
  styleUrls: ['./alias.component.scss']
})
export class AliasComponent implements OnInit {
  @Input('control') control: FormControl;
  @Input('index') index: number;
  @Output('deleteAlias') delete: EventEmitter<any> = new EventEmitter();
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // this.control = this.fb.control('');
  }

  deleteAlias(){
     this.delete.emit(this.index);
  }

}
