import { Component, OnInit } from '@angular/core';
import { BackendService } from '../api/backend.service';

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

}
