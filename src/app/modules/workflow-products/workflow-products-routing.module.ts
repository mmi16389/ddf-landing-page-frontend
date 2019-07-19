import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';


const routes: Routes = [ 
  {
  path: 'home',
  component: DynamicPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkflowProductsRoutingModule { }
