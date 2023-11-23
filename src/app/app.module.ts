// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AlbumListComponent } from './album-list/album-list.component';

import { AlbumService } from './album.service';
import { PhotoService } from './photo.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlbumListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Importe o HttpClientModule para possibilitar chamadas HTTP
    FormsModule
  ],
  providers: [
    AlbumService,
    PhotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
