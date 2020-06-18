import { Component, OnInit, Input } from '@angular/core';
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
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // this.control = this.fb.control('');
  }

}
