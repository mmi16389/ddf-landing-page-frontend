import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowAuthentificationRoutingModule } from './workflow-authentification-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SubscribeComponent } from './subscribe/subscribe.component';


@NgModule({
  declarations: [LoginComponent, LogoutComponent, SubscribeComponent],
  imports: [
    CommonModule,
    WorkflowAuthentificationRoutingModule
  ]
})
export class WorkflowAuthentificationModule { }
