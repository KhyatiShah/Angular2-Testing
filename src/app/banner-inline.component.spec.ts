import {ComponentFixture, TestBed, fakeAsync, tick, async} from '@angular/core/testing';
import {By}              from '@angular/platform-browser';
import {DebugElement}    from '@angular/core';

import {BannerComponent} from './banner-inline.component';
import {MockBannerService} from "./mock-banner.service";
import {BannerService} from "./banner.service";

describe('BannerComponent Test', () => {

    let comp: BannerComponent;
    let fixture: ComponentFixture<BannerComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BannerComponent], // declare the test component
            providers: [
                {provide: BannerService, useClass: MockBannerService}]
        });

        fixture = TestBed.createComponent(BannerComponent);

        comp = fixture.componentInstance; // BannerComponent test instance

        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    });


    it('should get title in the DOM until manually call `detectChanges`', () => {
        expect(el.textContent).toEqual('');
    });

    it('should display original title', () => {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });

    it('should get heroes list', fakeAsync(() => {
        comp.title = 'Test Title';
        comp.getHeroes();
        tick();
        expect(comp.heroes.length).toBe(1);
    }));

});
