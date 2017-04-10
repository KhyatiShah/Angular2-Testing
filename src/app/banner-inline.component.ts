import {Component, OnInit} from '@angular/core';
import {BannerService} from "./banner.service";
import  {Hero} from "./hero";

@Component({
    selector: 'app-banner',
    template: '<h1>{{title}} {{heroes.length}}</h1><br/>' +
    '<form #loginForm="ngForm">' +
    '<input type="text" [(ngModel)]="name" name="name1" #name1="ngModel"/>' +
    '<br/><input type="submit" (click)="save()" class="button" />' +
    '</form>'
})
export class BannerComponent implements OnInit {
    title = 'Test Tour of Heroes';
    heroes: Array<Hero>;
    name: string;

    constructor(private bannerService: BannerService) {

    }

    ngOnInit() {
        this.name = "";
        this.heroes = [];
    }

    getHeroes() {
        this.bannerService.getHeroes().then((response) => {
            this.heroes = response;
        });
    }

    changeTitle() {
        this.title = "Title Changed";
    }

    save() {
        this.heroes.push({name: this.name, id: this.heroes.length + 1});
    }

}

