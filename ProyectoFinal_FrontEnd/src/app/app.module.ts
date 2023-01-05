import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoArgentinaProgramaComponent } from './components/logo-argentina-programa/logo-argentina-programa.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { BannerComponent } from './components/banner/banner.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgentinaProgramaComponent,
    SocialMediaComponent,
    BannerComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
