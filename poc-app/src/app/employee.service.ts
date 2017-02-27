import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class Employeeservice{
    private _url:string = "https://jsonplaceholder.typicode.com/posts";
    constructor (private _http:Http){};
    getEmployee(){
        return this._http.get(this._url)
        .map((res:Response)=>{ 
            var response = res.json();
            var filterData:any[] =[];
    for (var obj of response){
      if(obj.id==1){
          filterData.push(obj);
        //   console.log("filter pu dta");
        //   console.log(filterData);
      }
            }
            // console.log(filterData);
            return filterData;
        })
    }
}