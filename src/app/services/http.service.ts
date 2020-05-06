import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = `${environment.url}`;

@Injectable({
  providedIn: 'root'
})
export class HttpService {



  constructor(private http: HttpClient) { }

  public get(route) {
    return this.http.get(url + route);
  }

  public post(route, data) {
    return this.http.post(url + route, data);
  }

  getAllDataLimit(route: string, key: any, type: any) {
    return new Promise((resolve, reject) => {
      const apiurl = url + route + '/' + key + '/' + type;
      this.http.get(apiurl)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
