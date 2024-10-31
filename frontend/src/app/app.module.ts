import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplyFormComponent } from './components/apply-form/apply-form.component';
import { ApplyPageComponent } from './components/apply-page/apply-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplyFormComponent,
    ApplyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
