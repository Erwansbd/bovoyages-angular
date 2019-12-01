import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesVoyageComponent } from './dates-voyage.component';

describe('DatesVoyageComponent', () => {
  let component: DatesVoyageComponent;
  let fixture: ComponentFixture<DatesVoyageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatesVoyageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
