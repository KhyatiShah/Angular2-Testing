import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './banner-inline.component';
import { BannerService } from './banner.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        BannerComponent
    ],
    providers: [
        BannerService
    ],
    bootstrap: [BannerComponent]
})
export class BannerModule { }
