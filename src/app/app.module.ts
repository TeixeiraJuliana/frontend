import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { MainComponent } from './main/app.main.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { LabelContentComponent } from './label-content/label-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    FormComponent,
    LabelContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
