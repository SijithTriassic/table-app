import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableControlsComponent } from './table-controls.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    TableControlsComponent,
  ],
  providers: [],
  exports: [TableControlsComponent],
})
export class TableControlsModule { }
