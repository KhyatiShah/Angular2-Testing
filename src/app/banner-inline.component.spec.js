"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var banner_inline_component_1 = require("./banner-inline.component");
var mock_banner_service_1 = require("./mock-banner.service");
var banner_service_1 = require("./banner.service");
describe('BannerComponent Test', function () {
    var comp;
    var fixture;
    var de;
    var el;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [banner_inline_component_1.BannerComponent],
            providers: [
                { provide: banner_service_1.BannerService, useClass: mock_banner_service_1.MockBannerService }
            ]
        });
        fixture = testing_1.TestBed.createComponent(banner_inline_component_1.BannerComponent);
        comp = fixture.componentInstance; // BannerComponent test instance
        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        el = de.nativeElement;
    });
    it('should get title in the DOM until manually call `detectChanges`', function () {
        expect(el.textContent).toEqual('');
    });
    it('should display original title', function () {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });
    it('should get heroes list', testing_1.fakeAsync(function () {
        comp.title = 'Test Title';
        comp.getHeroes();
        testing_1.tick();
        expect(comp.heroes.length).toBe(1);
    }));
});
//# sourceMappingURL=banner-inline.component.spec.js.map