import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonConvertComponent } from './json-convert.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    JsonConvertComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    JsonConvertComponent
  ],
})
export class JsonConvertModule { }
