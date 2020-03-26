import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { ChildFormComponent } from './child-form/child-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Child2Component } from './child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentFormComponent,
    ChildFormComponent,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
