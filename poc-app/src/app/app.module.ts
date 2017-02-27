import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {EmployeeComponent} from './employee-list.component';
import { HttpModule } from '@angular/http';
import {FetchJsonPipe} from './fetch-json.pipe';
@NgModule({
  imports:      [ BrowserModule,HttpModule ],
  declarations: [ AppComponent,EmployeeComponent,FetchJsonPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
