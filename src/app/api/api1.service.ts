import { Injectable } from '@angular/core';
import Swagger from 'swagger-client';

@Injectable()
export class Api1Service {
  client;

  constructor() {
    Swagger({
      url: 'https://api.swaggerhub.com/apis/duane-dibley/sample/1.2.1'
    })
      .then(client => this.client = client);
  }

  getPath(path, params): Promise<any> {
    const meth = this.client.apis.default,
      split = path.split('/'),
      join = split.join('__'),
      query = 'get_' + join;

    if (meth[query]) {
      return meth[query](params)
        .then(result => result.body)
        .catch(console.error);
    }
  }
}
