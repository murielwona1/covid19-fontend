import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volontaire',
  templateUrl: './volontaire.component.html',
  styleUrls: ['./volontaire.component.css']
})
export class VolontaireComponent implements OnInit {

  expertiseData: any;

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
}
