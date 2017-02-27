"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
// import {Employeeservice} from './employee.service';
var fetch_json_pipe_1 = require("./fetch-json.pipe");
var EmployeeComponent = (function () {
    function EmployeeComponent(pipe) {
        this.pipe = pipe;
        // public _url='https://jsonplaceholder.typicode.com/posts';
        this._url = '';
        this.employees = [];
    }
    ;
    EmployeeComponent.prototype.filterData = function () {
        this._url = 'https://jsonplaceholder.typicode.com/posts';
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    core_1.Component({
        selector: 'employee-list',
        template: "<h1>Employee List</h1>\n    <button (click)=\"filterData()\">filter</button>\n    <ul *ngFor = \"let employee of \n    (_url|fetch)\">\n    <li>{{employee.id}}</li>\n    </ul>"
    }),
    __metadata("design:paramtypes", [fetch_json_pipe_1.FetchJsonPipe])
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee-list.component.js.map