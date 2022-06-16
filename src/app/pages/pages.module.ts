import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
  ],
  exports:[
    PagesComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule,
    SharedModule,
    HttpClientModule,
  ]
})
export class PagesModule { }
