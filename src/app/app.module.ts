import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { HeaderModule } from './header/header.module';


import { GreeterModule } from './greeter/greeter.module';

import { StudentModule } from './student/student.module';
import { FooterAreaModule } from './footer-area/footer-area.module';
import { BodyAreaModule } from './body-area/body-area.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HeaderModule,
    FormsModule,
    BrowserModule,
    GreeterModule,
    StudentModule,
    FooterAreaModule,
    BodyAreaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
