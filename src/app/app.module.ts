import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { HeaderModule } from './header/header.module';

import { BodyAreaComponent } from './body-area/body-area.component';
import { FooterAreaComponent } from './footer-area/footer-area.component';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    BodyAreaComponent,
    FooterAreaComponent
  ],
  imports: [
    HeaderModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
