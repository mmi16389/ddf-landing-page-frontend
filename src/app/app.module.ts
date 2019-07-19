import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderContainerComponent } from './core/header-container/header-container.component';
import { BodyContainerComponent } from './core/body-container/body-container.component';
import { FooterContainerComponent } from './core/footer-container/footer-container.component';
import { DesktopHeaderComponent } from './core/header-container/desktop-header/desktop-header.component';
import { MobileHeaderComponent } from './core/header-container/mobile-header/mobile-header.component'; 
import { SharedModule } from './modules/shared/shared.module';
import { WorkflowAuthentificationModule } from './modules/workflow-authentification/workflow-authentification.module';
import { WorkflowProductsModule } from './modules/workflow-products/workflow-products.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderContainerComponent,
    BodyContainerComponent,
    FooterContainerComponent,
    DesktopHeaderComponent,
    MobileHeaderComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    SharedModule,
    WorkflowAuthentificationModule,
    WorkflowProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
