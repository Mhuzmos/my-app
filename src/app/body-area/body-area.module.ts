import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyAreaComponent } from './body-area.component';
import { GreeterModule } from '../greeter/greeter.module';


@NgModule({
  declarations: [BodyAreaComponent],
  imports: [
    CommonModule,
    GreeterModule
  ]
})
export class BodyAreaModule { }
