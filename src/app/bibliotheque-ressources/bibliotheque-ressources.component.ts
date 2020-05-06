import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-bibliotheque-ressources',
  templateUrl: './bibliotheque-ressources.component.html',
  styleUrls: ['./bibliotheque-ressources.component.css']
})
export class BibliothequeRessourcesComponent implements OnInit {

  bibiotheque: any = [];
  showLoarder = true;
  key = 0;
  type = 'documents';

  constructor(private http: HttpService, public sanitizer: DomSanitizer) {
    this.getBibliotheque(this.key, this.type);
  }

  ngOnInit() {
  }

  getBibliotheque(offset, type) {
    this.showLoarder = true;
    this.http.getAllDataLimit('api/bibiotheque/list-bibiotheque/', offset, type).then((result: any) => {
      if (result.length > 0) {
        this.bibiotheque = result;
      }
      this.showLoarder = false;
    });
  }

  checkType(type) {
    this.type = type;
    this.getBibliotheque(this.key, this.type);
  }
}
