import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Mser2SidenavComponent } from './mser2-sidenav/mser2-sidenav.component';
import { Mser2FooterComponent } from './mser2-footer/mser2-footer.component';
import { Mser2ProfileComponent } from './mser2-profile/mser2-profile.component';
import { Mser2BodyComponent } from './mser2-body/mser2-body.component';
import { Mser2HeaderComponent } from './mser2-header/mser2-header.component';

@NgModule({
  declarations: [
    AppComponent,
    Mser2SidenavComponent,
    Mser2FooterComponent,
    Mser2ProfileComponent,
    Mser2BodyComponent,
    Mser2HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
