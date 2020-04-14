import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ActualiteComponent } from './actualite/actualite.component' ;
import { PointPresseComponent } from './point-presse/point-presse.component';
import { SituationCamerounComponent } from './situation-cameroun/situation-cameroun.component';
import { SituationMondeComponent } from './situation-monde/situation-monde.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'actualités', component: ActualiteComponent, children: [
    { path: 'point-presse', component: PointPresseComponent },
    { path: 'situation-cameroun', component: SituationCamerounComponent },
    { path: 'situation-monde', component: SituationMondeComponent },
    { path: '', component: PointPresseComponent },
  ]},
  { path: '*', component: AccueilComponent },
  { path: '', component: AccueilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
