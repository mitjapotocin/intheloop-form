import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoopAppComponent } from './loop-app.component';
import { LoopFormComponent } from './loop-form/loop-form.component';
import { LoopDropdownComponent } from './loop-form/loop-dropdown.component';

@NgModule({
  declarations: [LoopAppComponent, LoopFormComponent, LoopDropdownComponent],
  imports: [BrowserModule],
  bootstrap: [LoopAppComponent],
})
export class AppModule {}