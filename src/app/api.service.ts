import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ILineItem } from './line-item.interface';
import { LineItem } from './line-item.model';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getLineItems() {
    return this.http.get('/assets/placements_teaser_data.json') // TODO: point to real endpoint
      .toPromise()
      .then(res => <ILineItem[]>res.json())
      .then(data => data.map(d => new LineItem(d)));
  }

}
