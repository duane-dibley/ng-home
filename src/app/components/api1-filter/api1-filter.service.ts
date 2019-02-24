import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Api1FilterService {

  constructor(
    private http: HttpClient
  ) { }

  getSyms(formValues) {
    // fetches all syms
    return this.http.get('/api/' + '/ref-data/symbols')
      .subscribe(result => {
        // TODO
      });
  }
}
