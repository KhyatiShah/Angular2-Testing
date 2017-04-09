"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var banner_service_1 = require("./banner.service");
var BannerComponent = (function () {
    function BannerComponent(bannerService) {
        this.bannerService = bannerService;
        this.title = 'Test Tour of Heroes';
    }
    BannerComponent.prototype.ngOnInit = function () {
        this.heroes = [];
    };
    BannerComponent.prototype.getHeroes = function () {
        var _this = this;
        this.bannerService.getHeroes().then(function (response) {
            _this.heroes = response;
        });
    };
    BannerComponent.prototype.changeTitle = function () {
        this.title = "Title Changed";
    };
    return BannerComponent;
}());
BannerComponent = __decorate([
    core_1.Component({
        selector: 'app-banner',
        template: '<h1>{{title}} {{heroes.length}}</h1>'
    }),
    __metadata("design:paramtypes", [banner_service_1.BannerService])
], BannerComponent);
exports.BannerComponent = BannerComponent;
//# sourceMappingURL=banner-inline.component.js.map