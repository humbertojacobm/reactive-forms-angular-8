import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-photos',
  templateUrl: './photos-container.component.html',
  styleUrls: ['./photos-container.component.scss']
})
export class PhotosContainerComponent implements OnInit {

  @Input('form-group') formGroup: FormGroup;

  get photos(){
    return this.formGroup.get('photos') as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    setTimeout(()=>{
      this.formGroup.addControl('photos',this.formBuilder.array([
        this.getNewPhotoFormGroup()
      ]))
    })
  }

  private getNewPhotoFormGroup(): any {
    return this.formBuilder.group({
      size: [''],
      format: ['']
    });
  }

  add(){
   this.photos.push(this.getNewPhotoFormGroup());
  }

  deletePhoto(index: number){
    this.photos.removeAt(index);
  }

}
