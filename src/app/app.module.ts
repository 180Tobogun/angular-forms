import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TemplateComponent} from './template/template.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
