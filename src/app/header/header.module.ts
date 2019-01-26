import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderTitleComponent } from './header-title/header-title.component';
import { HeaderTitleNavComponent } from './header-title-nav/header-title-nav.component';
import { HeaderTitleSearchComponent } from './header-title-search/header-title-search.component';


@NgModule({
  declarations: [HeaderComponent, HeaderTitleComponent, HeaderTitleNavComponent, HeaderTitleSearchComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
