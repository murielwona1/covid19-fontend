import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav', null) sidenav: MatSidenav;

  constructor(private route: Router) {
  }
   navigate(routes) {
    this.route.navigate([routes]);
    this.sidenav.close();
  }
}
