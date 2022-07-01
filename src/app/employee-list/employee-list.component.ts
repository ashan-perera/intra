import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { BackendService } from '../api/backend.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  employees: Observable<any>;
  displayedColumns: string[] = [
    'imageUrl',
    'firstName',
    'email',
    'contactNumber',
    'age',
    'dob',
    'address'
  ];
  dataSource: MatTableDataSource<any>;

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.backendService.getAllEmployees().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data)
      this.employees = this.dataSource.connect();
      this.dataSource.paginator = this.paginator;
    });
  }

}
