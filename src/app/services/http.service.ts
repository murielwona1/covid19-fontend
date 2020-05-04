import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: String = `${environment.url}`;

  constructor(private htpp: HttpClient) { }

  public get(route) {
    return this.htpp.get(this.url + route);
  }

  public post(route, data) {
    return this.htpp.post(this.url + route, data);
  }
}
