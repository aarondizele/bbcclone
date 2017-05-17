import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

import { ClarityModule } from 'clarity-angular';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FindrideComponent } from './findride/findride.component';
import { SearchresultComponent } from './searchresult/searchresult.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    FindrideComponent,
    SearchresultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClarityModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
