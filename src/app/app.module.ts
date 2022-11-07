import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';

import { TableModule } from 'primeng/table';
import { UserListComponent } from './components/user-list/user-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';

import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './service/user.service';
import { CarrouselComponent } from './components/carrousel/carrousel.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    UserListComponent,
    AddUserComponent,
    CarrouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    CardModule,
    TableModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    ButtonModule,
    CalendarModule,
    SliderModule,

    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
