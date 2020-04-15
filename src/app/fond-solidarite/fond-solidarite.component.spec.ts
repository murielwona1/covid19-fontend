import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondSolidariteComponent } from './fond-solidarite.component';

describe('FondSolidariteComponent', () => {
  let component: FondSolidariteComponent;
  let fixture: ComponentFixture<FondSolidariteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondSolidariteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondSolidariteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
