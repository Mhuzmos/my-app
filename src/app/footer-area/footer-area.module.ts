import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterAreaComponent } from './footer-area.component';

@NgModule({
  declarations: [FooterAreaComponent],
  imports: [
    CommonModule
  ],
  exports:[FooterAreaComponent]

})
export class FooterAreaModule { }
