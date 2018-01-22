import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import{ Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
@Injectable()

export class GuiterService {
public newOrderSubject = new Subject<any>();
  constructor(private http:Http) { }

  GuiterServiceData()
  {
return this.http.get('/assets/guitardata.json')
.map((response:Response)=> response.json());

//.catch(errorHandler);
  }
 
}
