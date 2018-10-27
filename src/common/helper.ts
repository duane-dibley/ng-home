import Zousan from 'zousan';
import { HttpClient } from '@angular/common/http';

let timer;

export function debounceFn(delay: number, callback: Function, args: any): void {
    clearTimeout(timer);
    timer = setTimeout(done, delay);

    function done() {
        callback(args);
    }
}

export function fetchDoc(link: string) {
    return xhttpPromise(link)
        .finally(data => data ? JSON.parse(data) : null)
        .catch(console.error);
}

export function xhttpPromise(link): any {
    return new Zousan((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', link, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200 || xhr.status === 0) {
                    let toReturn = xhr.responseText;

                    try {
                        toReturn = JSON.parse(toReturn);
                    }
                    finally {
                        resolve(toReturn);
                    }
                } else {
                    reject(console.log('Unable to fetch data: xhttpPromiseBasicAuth onreadystatechange xhr status ' + xhr.status));
                }
            }
        };
        xhr.setRequestHeader('Authorization', 'Basic a2tUeFloNE10eUpYRHZGVF9IQmtabmJTNXBQb1dGQzZGYmNiX28tMQ==');
        xhr.setRequestHeader('Accept', 'application/pdf');
        xhr.send(null);
    });
}
