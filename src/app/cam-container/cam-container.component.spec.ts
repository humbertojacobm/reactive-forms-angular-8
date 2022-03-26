import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamContainerComponent } from './cam-container.component';

describe('CamContainerComponent', () => {
  let component: CamContainerComponent;
  let fixture: ComponentFixture<CamContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
