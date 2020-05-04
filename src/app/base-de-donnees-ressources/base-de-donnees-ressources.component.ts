import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-de-donnees-ressources',
  templateUrl: './base-de-donnees-ressources.component.html',
  styleUrls: ['./base-de-donnees-ressources.component.css']
})
export class BaseDeDonneesRessourcesComponent implements OnInit {

  expertiseData: any;
  viewMode = 'expertise';

  constructor(private httpService: HttpService) {
    this.getExpertise();
  }

  ngOnInit() {
  }

  getExpertise() {
    this.httpService.get("api/expertise/list-expertise").subscribe(res => {
      this.expertiseData = res;
    });
  }

  setViewMode(view) {
    this.viewMode = view;
  }

}
