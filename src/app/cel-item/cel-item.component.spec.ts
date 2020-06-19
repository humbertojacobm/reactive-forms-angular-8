import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelItemComponent } from './cel-item.component';

describe('CelItemComponent', () => {
  let component: CelItemComponent;
  let fixture: ComponentFixture<CelItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
