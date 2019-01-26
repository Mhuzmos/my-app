import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyAreaComponent } from './body-area.component';
import { ContentComponent } from '../Body-Area/content/content.component';
import { BodyAreaContentComponent } from '../Body-Area/body-area-content/body-area-content.component';

@NgModule({
  declarations: [BodyAreaComponent, ContentComponent, BodyAreaContentComponent],
  imports: [
    CommonModule
  ]
})
export class BodyAreaModule { }
