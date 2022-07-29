import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl = 'http://172.20.11.177:501/';

  constructor(private httpClient: HttpClient) { }

  searchEmployees(params): any {
    return this.httpClient.get(this.apiUrl + 'Emp/{emp_id}', { params: params });
  }

  listAllDepartments(): any {
    return this.httpClient.get(this.apiUrl + 'Departments/{id}')
  }

}
