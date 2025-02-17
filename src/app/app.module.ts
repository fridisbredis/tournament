import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './services/api.service';
import { AppRoutingModule } from './routing/app-routing.module';

@NgModule({
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ApiService],
})
export class AppModule { }
