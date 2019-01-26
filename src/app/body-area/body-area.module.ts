import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyAreaComponent } from './body-area.component';
import { GreeterModule } from '../greeter/greeter.module';
import { StudentModule } from '../student/student.module';




@NgModule({
  declarations: [BodyAreaComponent],
  imports: [
    CommonModule,
    GreeterModule,
    StudentModule
  ],
  exports:[BodyAreaComponent]

})
export class BodyAreaModule { }
