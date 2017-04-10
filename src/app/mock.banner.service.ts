import {Injectable} from '@angular/core';
import {ResponseOptions, Response} from "@angular/http";
import {Hero} from "./hero";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MockBannerService {
    constructor() {
    }


    getHeroes() {
        let mockHero = new Hero();
        mockHero.name = "John";
        mockHero.id = 1;
        let heroList = [mockHero];
        return Promise.resolve(heroList);
    }
}