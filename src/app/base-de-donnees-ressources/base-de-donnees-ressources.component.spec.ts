import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDeDonneesRessourcesComponent } from './base-de-donnees-ressources.component';

describe('BaseDeDonneesRessourcesComponent', () => {
  let component: BaseDeDonneesRessourcesComponent;
  let fixture: ComponentFixture<BaseDeDonneesRessourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseDeDonneesRessourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDeDonneesRessourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
