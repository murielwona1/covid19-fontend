import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonsProjetComponent } from './dons-projet.component';

describe('DonsProjetComponent', () => {
  let component: DonsProjetComponent;
  let fixture: ComponentFixture<DonsProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonsProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonsProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
