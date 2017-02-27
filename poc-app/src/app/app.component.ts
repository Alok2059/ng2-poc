import { Component } from '@angular/core';
import{Employeeservice} from'./employee.service';
import {FetchJsonPipe} from './fetch-json.pipe';
@Component({
  selector: 'my-app',
  template: '<employee-list></employee-list>',
  providers:[FetchJsonPipe]
})
export class AppComponent { 

}
