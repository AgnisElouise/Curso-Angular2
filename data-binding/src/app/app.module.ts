
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MeuFormModule } from './meu-form/meu-form.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { CicloComponent } from './ciclo/ciclo.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    OutputPropertyComponent,
    InputPropertyComponent,
    CicloComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    MeuFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
