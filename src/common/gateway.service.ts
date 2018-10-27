import Zousan from 'zousan';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Gateway {
    constructor(private http: HttpClient) { }

    // TODO - unable to get useable response
    docMetadata(link) {
        // while (link.charAt(0) === '/') {
        //     link = link.substr(1);
        // }

        // const headers = new HttpHeaders()
        //     .set('Authorization', 'Basic a2tUeFloNE10eUpYRHZGVF9IQmtabmJTNXBQb1dGQzZGYmNiX28tMQ==');

        // const params = new HttpParams();

        return new Zousan((resolve, reject) => {
            this.http.get('/meta/' + link, {
                responseType: 'text',
                // headers,
                // params
            }).subscribe(
                result => {
                    try {
                        result = JSON.parse(result);
                    }
                    finally {
                        resolve(result);
                    }
                },
                error => {
                    error.statusText === 'Not Found' ? resolve(null) : reject(error);
                }
            );
        });
    }

    // TODO - unable to get useable response
    fetchDoc(link) {
        // while (link.charAt(0) === '/') {
        //     link = link.substr(1);
        // }

        // const headers = new HttpHeaders()
        //     .set('Authorization', 'Basic a2tUeFloNE10eUpYRHZGVF9IQmtabmJTNXBQb1dGQzZGYmNiX28tMQ==')
        //     .set('Accept', 'application/pdf');

        // const params = new HttpParams();

        return new Zousan((resolve, reject) => {
            this.http.get('/doc/' + link, {
                responseType: 'text',
                // headers,
                // params
            }).subscribe(
                result => {
                    try {
                        result = JSON.parse(result);
                    }
                    finally {
                        resolve(result);
                    }
                },
                error => {
                    error.statusText === 'Not Found' ? resolve(null) : reject(error);
                }
            );
        });
    }

    fetchLink(link) {
        // while (link.charAt(0) === '/') {
        //     link = link.substr(1);
        // }

        // const headers = new HttpHeaders()
        //     .set('Authorization', 'Basic a2tUeFloNE10eUpYRHZGVF9IQmtabmJTNXBQb1dGQzZGYmNiX28tMQ==');

        // const params = new HttpParams();

        return new Zousan((resolve, reject) => {
            this.http.get('/api/' + link, {
                responseType: 'text',
                // headers,
                // params
            }).subscribe(
                result => {
                    try {
                        result = JSON.parse(result);
                    }
                    finally {
                        resolve(result);
                    }
                },
                error => {
                    error.statusText === 'Not Found' ? resolve(null) : reject(error);
                }
            );
        });
    }
}
