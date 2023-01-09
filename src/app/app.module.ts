import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HostColorDirective } from './host-color.directive';
import { HostDirective } from './host.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HostColorDirective,
    HostDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
