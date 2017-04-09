import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class BannerService {
    private heroesUrl = 'app/heroes';  // URL to web api

    constructor(private http: Http) { }

    getHeroes(): Promise<Array<Hero>> {
        return this.http.get(this.heroesUrl).map(res => res.json()).toPromise();
    }

}
