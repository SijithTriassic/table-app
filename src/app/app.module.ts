import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableModule } from './shared/components/table/table.module';
import { TableManagementComponent } from './table-management/table-management.component';

const appRoutes: Routes = [
  { path: '**', component: TableManagementComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TableManagementComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
