import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HeaderComponent} from "./components/header/header.component";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthenticatedComponent} from "./pages/auth-page/auth-page.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {ButtonModule} from 'primeng/button';
import {CardModule} from "primeng/card";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {Router} from '@angular/router';
import {PanelModule} from "primeng/panel";
import {ListboxModule} from "primeng/listbox";
import {SliderModule} from "primeng/slider";
import {CheckboxModule} from "primeng/checkbox";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {MultiSelectModule} from "primeng/multiselect";
import {TableComponent} from "./components/table/table.component";
import {TableModule} from "primeng/table";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticatedComponent,
    MainPageComponent,
    HeaderComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    PasswordModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    PanelModule,
    ListboxModule,
    SliderModule,
    CheckboxModule,
    ToastModule,
    ToolbarModule,
    MultiSelectModule,
    TableModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
