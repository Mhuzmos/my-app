import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { HeaderModule } from './header/header.module';

import { BodyAreaComponent } from './body-area/body-area.component';
import { FooterAreaComponent } from './footer-area/footer-area.component';
import { GreeterModule } from './greeter/greeter.module';

@NgModule({
  declarations: [
    AppComponent,
    BodyAreaComponent,
    FooterAreaComponent
  ],
  imports: [
    HeaderModule,
    FormsModule,
    BrowserModule,
    GreeterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
