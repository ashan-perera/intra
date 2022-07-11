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
      name: 'Employee Recruitment Form',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      pdfUrl: '../assets/ITE3106.pdf'
    },
    {
      name: 'Co-op Letter Head',
      description: 'fgh',
      pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    },
    {
      name: 'Leave Form',
      description: 'fgh',
      pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    },
    {
      name: 'Manual Leave Form',
      description: 'fgh',
      pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    },
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
