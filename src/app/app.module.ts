import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule, MatListModule, MatCardModule, MatSlideToggleModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './menu/menu.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSlideToggleModule,
    MatListModule
  ],
  providers: [
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
