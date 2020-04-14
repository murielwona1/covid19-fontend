import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationMondeComponent } from './situation-monde.component';

describe('SituationMondeComponent', () => {
  let component: SituationMondeComponent;
  let fixture: ComponentFixture<SituationMondeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SituationMondeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SituationMondeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
