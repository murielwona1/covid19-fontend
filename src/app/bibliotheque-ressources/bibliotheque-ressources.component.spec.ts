import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliothequeRessourcesComponent } from './bibliotheque-ressources.component';

describe('BibliothequeRessourcesComponent', () => {
  let component: BibliothequeRessourcesComponent;
  let fixture: ComponentFixture<BibliothequeRessourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibliothequeRessourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliothequeRessourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
