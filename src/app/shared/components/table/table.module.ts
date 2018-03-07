import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination'; 

import { TableComponent } from './table.component';
import { TableControlsModule } from '../table-controls/table-controls.module';

@NgModule({
  imports: [
    CommonModule,
    TableControlsModule,
    NgxPaginationModule,
  ],
  declarations: [
    TableComponent,
  ],
  providers: [],
  exports: [TableComponent],
})
export class TableModule { }
