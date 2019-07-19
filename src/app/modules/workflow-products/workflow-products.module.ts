import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowProductsRoutingModule } from './workflow-products-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjetcComponent } from './projetc/projetc.component';
import { OffersComponent } from './offers/offers.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { NewsComponent } from './news/news.component';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    ProjetcComponent,
    OffersComponent,
    SuggestionsComponent,
    NewsComponent,
    DynamicPageComponent
  ],
  imports: [
    CommonModule,
    WorkflowProductsRoutingModule
  ]
})
export class WorkflowProductsModule { }
