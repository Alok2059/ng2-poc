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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var Employeeservice = (function () {
    function Employeeservice(_http) {
        this._http = _http;
        this._url = "https://jsonplaceholder.typicode.com/posts";
    }
    ;
    Employeeservice.prototype.getEmployee = function () {
        return this._http.get(this._url)
            .map(function (res) {
            var response = res.json();
            var filterData = [];
            for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                var obj = response_1[_i];
                if (obj.id == 1) {
                    filterData.push(obj);
                }
            }
            // console.log(filterData);
            return filterData;
        });
    };
    return Employeeservice;
}());
Employeeservice = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Employeeservice);
exports.Employeeservice = Employeeservice;
//# sourceMappingURL=employee.service.js.map