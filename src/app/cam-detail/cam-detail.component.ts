import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-cam-detail',
  templateUrl: './cam-detail.component.html',
  styleUrls: ['./cam-detail.component.scss']
})
export class CamDetailComponent implements OnInit {
  @Input('group') group: FormGroup;

  @Input('index') index: number;
  @Output('delete') delete: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteCam(){
    this.delete.emit(this.index);
  }


}
