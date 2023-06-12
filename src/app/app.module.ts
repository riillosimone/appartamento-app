import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { AppartamentoListComponent } from './features/appartamento/appartamento-list/appartamento-list.component';
import { AppartamentoDetailComponent } from './features/appartamento/appartamento-detail/appartamento-detail.component';
import { AppartamentoDeleteComponent } from './features/appartamento/appartamento-delete/appartamento-delete.component';
import { AppartamentoInsertComponent } from './features/appartamento/appartamento-insert/appartamento-insert.component';
import { AppartamentoEditComponent } from './features/appartamento/appartamento-edit/appartamento-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    AppartamentoListComponent,
    AppartamentoDetailComponent,
    AppartamentoDeleteComponent,
    AppartamentoInsertComponent,
    AppartamentoEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
