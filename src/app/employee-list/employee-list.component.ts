import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { BackendService } from '../api/backend.service';
import { EmployeeService } from '../api/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  dpt;
  empid;
  name;
  NIC;
  departments;

  employees: Observable<any>;
  displayedColumns: string[] = [
    'imageUrl',
    'firstName',
    'department',
    'designation',
    'telephoneNumber',
    'location'
  ];
  dataSource: MatTableDataSource<any>;

  showTable;

  constructor(
    private backendService: BackendService,
    private employeeService: EmployeeService,
    private _spinner: NgxSpinnerService,
    private _toastrService: ToastrService
    ) { }

  ngOnInit(): void {
    this.listAllDepartments();
  }

  getAllEmployees() {
    this.backendService.getAllEmployees().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data)
      this.employees = this.dataSource.connect();
      this.dataSource.paginator = this.paginator;
    });
  }

  listAllDepartments() {
    this.employeeService.listAllDepartments().subscribe((data: any) => {
      this.departments = data;
    }, error => {
      console.log("Zychnitz");
      this._toastrService.error('Try Again Later', 'Server Error!', {
        timeOut: 2000,
      });
    });
  }

  onSearchClick(): void {

    let params = new HttpParams()

    if (this.dpt) {
      params = params.set('dpt', this.dpt)
    } else {
      params = params.set('dpt', '1')
    }

    if (this.empid) {
      params = params.set('empid', this.empid)
    } else {
      params = params.set('empid', '1')
    }

    if (this.name) {
      params = params.set('name', this.name)
    } else {
      params = params.set('name', '1')
    }

    if (this.NIC) {
      params = params.set('NIC', this.NIC)
    } else {
      params = params.set('NIC', '1')
    }


    this.employeeService.searchEmployees(params).subscribe((data: any) => {
      this.showTable = true;
      this._spinner.show();
      // if(data.object.length == 0) {
      //   this.displayNoRecords = true;
      // } else {
      //   this.displayNoRecords = false;
      // }
      
      this.dataSource = new MatTableDataSource(data)
      this.employees = this.dataSource.connect();
      this.dataSource.paginator = this.paginator;

      setTimeout(() => {
        this._spinner.hide();
      });
    }, error => {
      this._toastrService.error('Try Again Later', 'Server Error!', {
        timeOut: 2000,
      });
    });
    
  }

}
