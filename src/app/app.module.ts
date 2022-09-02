import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer/footer.component';
import { HeadersComponent } from './headers/headers/headers.component'
import { ModalModule } from 'ngx-bootstrap/modal';
import { ClasesComponent } from './udemy/clases/clases.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeadersComponent,
    FooterComponent,
    ClasesComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
