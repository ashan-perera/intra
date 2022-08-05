import { Component, OnInit } from '@angular/core';
import { BackendService } from '../api/backend.service';

export interface Section {
  name: string;
  description: string;
  pdfUrl: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public filterCategory: any;

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getProduct()
    .subscribe(res=>{
      this.filterCategory = res;
    
    });
  }

  folders: Section[] = [
    {
      name: 'Grievance & Disciplinary Management Procedure',
      description: 'දුක්ගැනවිලි සහ ගැටුම් කළමනාකරණය​',
      pdfUrl: '../assets/Grievance & Disciplinary Management Procedure.pdf'
    },
    {
      name: 'Company Holidays',
      description: 'Company Holidays 2022 - General & Life',
      pdfUrl: '../assets/Company Holidays 2022 General & Life.pdf'
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      description: 'fgh',
      pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    },
    {
      name: 'Kitchen Remodel',
      description: 'fgh',
      pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    },
  ];

}
