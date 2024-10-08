import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CursosModule } from './cursos/cursos.module';
import { TesteComponent } from './teste/teste.component';
import { HeaderComponent } from './teste/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
