import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,NO_ERRORS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import {GifService} from './services/gif.service';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { HttpModule } from '@angular/http';
import { ClipboardModule } from 'ng2-clipboard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
  FormsModule,
    BrowserModule,
   MDBBootstrapModule.forRoot(),
   HttpModule,
   ClipboardModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [GifService],
  bootstrap: [AppComponent]
})
export class AppModule { }
