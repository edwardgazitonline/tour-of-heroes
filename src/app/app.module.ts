import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HeroesComponent } from './heroes/heroes.component';
import { NgModule } from '@angular/core';
import { EdwardComponent } from './edward/edward.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    EdwardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
