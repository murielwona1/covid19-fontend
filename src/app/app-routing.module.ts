import { BaseDeDonneesRessourcesComponent } from './base-de-donnees-ressources/base-de-donnees-ressources.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { PointPresseComponent } from './point-presse/point-presse.component';
import { SituationCamerounComponent } from './situation-cameroun/situation-cameroun.component';
import { SituationMondeComponent } from './situation-monde/situation-monde.component';
import { DonsComponent } from './dons/dons.component';
import { DonsProjetComponent } from './dons-projet/dons-projet.component';
import { FondSolidariteComponent } from './fond-solidarite/fond-solidarite.component';
import { VolontaireComponent } from './volontaire/volontaire.component';
import { BibliothequeRessourcesComponent } from './bibliotheque-ressources/bibliotheque-ressources.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  {
    path: 'actualités', component: ActualiteComponent, children: [
      { path: 'point-presse', component: PointPresseComponent },
      { path: 'situation-cameroun', component: SituationCamerounComponent },
      { path: 'situation-monde', component: SituationMondeComponent },
      { path: '', component: PointPresseComponent },
    ]
  },
  { path: 'dons-projet', component: DonsProjetComponent },
  { path: 'volontaire', component: VolontaireComponent },
  { path: 'fond-solidarite', component: FondSolidariteComponent },
  { path: 'base-de-donnees-ressources', component: BaseDeDonneesRessourcesComponent },
  { path: 'dons', component: DonsComponent },
  { path: 'bibliotheque', component: BibliothequeRessourcesComponent },
  { path: '*', component: AccueilComponent },
  { path: '', component: AccueilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
