import { Component, OnInit } from '@angular/core';
import { EducationReportService } from './education-report.service';

@Component({
  selector: 'app-education-reports',
  templateUrl: './education-reports.component.html',
  styleUrls: ['./education-reports.component.css'],
  providers: [EducationReportService]
})
export class EducationReportsComponent implements OnInit {
  imgSrc = 'http://epmgaa.media.clients.ellingtoncms.com/img/photos/2016/06/23/College_campus_t750x550.jpg?d885fc46c41745b3b5de550c70336c1b382931d2';
  constructor() { }

  ngOnInit() {
  }

}
