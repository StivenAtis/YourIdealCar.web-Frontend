import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './template/navigation-bar/navigation-bar.component';
import { PageFooterComponent } from './template/page-footer/page-footer.component';
import { HomeComponent } from './template/home/home.component';
import { ErrorComponent } from './template/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    PageFooterComponent,
    HomeComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
