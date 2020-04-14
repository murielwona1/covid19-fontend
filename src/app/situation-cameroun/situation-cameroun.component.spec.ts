import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationCamerounComponent } from './situation-cameroun.component';

describe('SituationCamerounComponent', () => {
  let component: SituationCamerounComponent;
  let fixture: ComponentFixture<SituationCamerounComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SituationCamerounComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SituationCamerounComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
