import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesvoyagesComponent } from './mesvoyages.component';

describe('MesvoyagesComponent', () => {
  let component: MesvoyagesComponent;
  let fixture: ComponentFixture<MesvoyagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesvoyagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesvoyagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
