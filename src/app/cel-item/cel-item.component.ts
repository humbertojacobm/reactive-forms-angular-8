import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-cel-item',
  templateUrl: './cel-item.component.html',
  styleUrls: ['./cel-item.component.scss']
})
export class CelItemComponent implements OnInit {

  @Input('group') group: FormGroup;
  @Input('index') index: number;
  @Output('delete') delete: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteCel(){
    this.delete.emit(this.index);
  }

}
