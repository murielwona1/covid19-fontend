import { HttpService } from './../services/http.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {

  offset: String = "0";
  publicationData: any;

  urlSafe: SafeResourceUrl;
  currentIndex = 0;

  mypublicationData: any = [
    { 'id': 1, 'source': 'ministere santé', 'date': '22/05/2020', 'videos': 'https://www.youtube.com/embed/uiklN6HjX0U', 'libelle': 'titre de la publication', 'description': 'contenu de la publication', 'tag': ['economi', 'vente'] },
    { 'id': 2, 'source': 'ministere santé', 'date': '22/05/2020', 'videos': 'https://www.youtube.com/embed/uiklN6HjX0U', 'libelle': 'titre de la publication', 'description': 'contenu de la publication', 'tag': ['economi', 'vente'] },
    { 'id': 3, 'source': 'ministere santé', 'date': '22/05/2020', 'videos': 'https://www.youtube.com/embed/uiklN6HjX0U', 'libelle': 'titre de la publication', 'description': 'contenu de la publication', 'tag': ['economi', 'vente'] },
    { 'id': 4, 'source': 'ministere santé', 'date': '22/05/2020', 'videos': 'https://www.youtube.com/embed/uiklN6HjX0U', 'libelle': 'titre de la publication', 'description': 'contenu de la publication', 'tag': ['economi', 'vente'] },
    { 'id': 5, 'source': 'ministere santé', 'date': '22/05/2020', 'videos': 'https://www.youtube.com/embed/uiklN6HjX0U', 'libelle': 'titre de la publication', 'description': 'contenu de la publication', 'tag': ['economi', 'vente'] },
    { 'id': 6, 'source': 'ministere santé', 'date': '22/05/2020', 'videos': 'https://www.youtube.com/embed/uiklN6HjX0U', 'libelle': 'titre de la publication', 'description': 'contenu de la publication', 'tag': ['economi', 'vente'] }
  ]

  curentPostData = [];
  currentRouteParam = 'null';

  constructor(private httpService: HttpService, public sanitizer: DomSanitizer, private route: ActivatedRoute, private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRouteParam = this.route.snapshot.paramMap.get('id');
      this.getPublicationByType(20, this.currentRouteParam);
    });
  }


  ngOnInit() {
  }

  setCurrentPost(publication, index) {
    this.curentPostData = publication;
    this.currentIndex = index;
    this.setVideo();
  }

  getPublicationByType(offset, type) {
    this.httpService.get("api/publication/list-publication/" + offset + "/" + type).subscribe((res: any) => {
      this.publicationData = res;
      if (res.length > 0) {
        this.curentPostData = res['0'];
        this.setVideo();
      }

    }, err => {
      console.log(err);
    }, () => {
      console.log("success");
    })
  }

  setVideo() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.curentPostData['videos']);
  }

}
