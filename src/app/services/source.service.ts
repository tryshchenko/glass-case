import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { zipObj } from 'ramda';


@Injectable()
export class SourceService {

  constructor(private http: Http) { }

  splitLines(csv: string): any {
    // @TODO this is not safe an needs to error safe
    const lines = csv.split('\n').map(row => row.split(','));
    if (lines.length < 2) {
      return [];
    }
    const header = lines.slice(0, 1)[0];
    const rows = lines.slice(1, lines.length);
    const assign = zipObj(header);
    return rows.map(assign);
  }

  getData() {
    return this.http.get(environment.url)
      .map(res => res.text())
      .map(this.splitLines);
  }

}
