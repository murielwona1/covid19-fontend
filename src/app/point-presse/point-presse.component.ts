import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-point-presse',
  templateUrl: './point-presse.component.html',
  styleUrls: ['./point-presse.component.css']
})
export class PointPresseComponent implements OnInit {
  offset: String = "0";
  typePublication: String = "point-presse";
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

  constructor(private httpService: HttpService, public sanitizer: DomSanitizer) {
    this.getPublicationByType(this.offset, this.typePublication);
  }


  ngOnInit() {
  }

  setCurrentPost(publication, index) {
    this.curentPostData = publication;
    this.currentIndex = index;
    this.setVideo();
  }

  getPublicationByType(offset, type) {
    this.httpService.get("api/publication/list-publication/" + offset + "/" + type).subscribe(res => {
      this.publicationData = res;
      this.curentPostData = res['0'];
      this.setVideo();
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
