import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PianoComponent } from './piano/piano.component';
import { PianoPipe } from './piano/piano.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PianoComponent,
    PianoPipe
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
