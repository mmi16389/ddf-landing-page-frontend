import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopHeaderActionButtonComponent } from './desktop-header-action-button/desktop-header-action-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DesktopHeaderSecondLineComponent } from './desktop-header-second-line/desktop-header-second-line.component';



@NgModule({
  declarations: [DesktopHeaderActionButtonComponent, DesktopHeaderSecondLineComponent],
  exports: [DesktopHeaderActionButtonComponent,DesktopHeaderSecondLineComponent ],
  imports: [
    CommonModule,
    NgbModule,
  ]
})
export class SharedModule { }
