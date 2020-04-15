import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolontaireComponent } from './volontaire.component';

describe('VolontaireComponent', () => {
  let component: VolontaireComponent;
  let fixture: ComponentFixture<VolontaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolontaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolontaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
