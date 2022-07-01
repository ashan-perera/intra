import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient: HttpClient) { }

  getProduct() {
    return this.httpClient.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getAllEmployees() {
    return this.httpClient.get<any>("https://hub.dummyapis.com/employee?noofRecords=100&idStarts=1001")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
