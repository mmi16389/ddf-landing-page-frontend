import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderContainerComponent } from './core/header-container/header-container.component';
import { BodyContainerComponent } from './core/body-container/body-container.component';
import { FooterContainerComponent } from './core/footer-container/footer-container.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderContainerComponent,
    BodyContainerComponent,
    FooterContainerComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
