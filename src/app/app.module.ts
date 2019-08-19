import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FarmerSearchCardComponent } from './farmer-search-card/farmer-search-card.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FarmerSearchProvider } from './farmer-search-abstract-provider/farmer-search-abstract-provider.component';


@NgModule({
  declarations: [
    AppComponent,
    FarmerSearchCardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [FarmerSearchProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
