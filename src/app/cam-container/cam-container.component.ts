import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cam-container',
  templateUrl: './cam-container.component.html',
  styleUrls: ['./cam-container.component.scss']
})
export class CamContainerComponent implements OnInit {
  @Input('form_Group') form : FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    //we need the setTimeout to avoid the error: ExpressionChangedAfterItHasBeenCheckedError...
    setTimeout(()=>{
      this.form.addControl('cams',this.fb.array([]));
    })

  }

  private getNewCamDetailGroup(): any {
    return this.fb.group({
      pixel: [''],
      focus: ['']
    });
  }

  get cams(){
    return this.form.get('cams') as FormArray;
  }

  add(){
    this.cams.push(this.getNewCamDetailGroup());
  }

  delete(index: number){
    this.cams.removeAt(index);
  }

}
