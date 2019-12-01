import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationListeComponent } from './destination-liste.component';

describe('DestinationListeComponent', () => {
  let component: DestinationListeComponent;
  let fixture: ComponentFixture<DestinationListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
