import { Pipe, PipeTransform } from '@angular/core';
import { Http,Response }                from '@angular/http';
import 'rxjs/add/operator/map';
@Pipe({
  name: 'fetch',
  pure: false
})
export class FetchJsonPipe  implements PipeTransform {
  private cachedData: any[] = [];
  private cachedUrl = '';
  constructor(private http: Http) { }
  transform(url: string): any {
    if (url !== this.cachedUrl) {
      this.cachedData = null;
      this.cachedUrl = url;
      this.http.get(url)
        .map((res:Response)=>{ 
            var response = res.json();
            var filterData:any[] =[];
    for (var obj of response){
      if(obj.id==4){
          filterData.push(obj);
      }
            }
            return filterData;
        })
        .subscribe( result => this.cachedData = result );
    }
    return this.cachedData;
  }
}
