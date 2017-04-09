import {Component, OnInit} from '@angular/core';
import {BannerService} from "./banner.service";
import  {Hero} from "./hero";

@Component({
    selector: 'app-banner',
    template: '<h1>{{title}} {{heroes.length}}</h1>'
})
export class BannerComponent implements OnInit {
    title = 'Test Tour of Heroes';
    heroes: Array<Hero>;

    constructor(private bannerService: BannerService) {

    }

    ngOnInit() {
        this.heroes = [];
    }

    getHeroes(){
        this.bannerService.getHeroes().then((response) => {
            this.heroes = response;
        });
    }

    changeTitle() {
       this.title="Title Changed";
    }

}

