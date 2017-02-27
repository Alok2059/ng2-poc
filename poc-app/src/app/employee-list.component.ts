import {Component,OnInit} from '@angular/core';
// import {Employeeservice} from './employee.service';
import {FetchJsonPipe} from './fetch-json.pipe';

@Component({
    selector:'employee-list',
    template:`<h1>Employee List</h1>
    <button (click)="filterData()">filter</button>
    <ul *ngFor = "let employee of 
    (_url|fetch)">
    <li>{{employee.id}}</li>
    </ul>`
})

export class EmployeeComponent {
    // public _url='https://jsonplaceholder.typicode.com/posts';
    public _url='';
constructor(private pipe:FetchJsonPipe){
};
public employees =[];

filterData(){
    this._url='https://jsonplaceholder.typicode.com/posts';
}
// transform(){
//     this.employees=new FetchJsonPipe().transform('kjfkf');
// } 
}