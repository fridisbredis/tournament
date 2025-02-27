import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './services/api.service';
import { AppRoutingModule } from './routing/app-routing.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [ApiService],
})
export class AppModule { }
