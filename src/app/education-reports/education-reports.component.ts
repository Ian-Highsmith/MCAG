import { Component, OnInit } from '@angular/core';
import { EducationReportService } from './education-report.service';

@Component({
  selector: 'app-education-reports',
  templateUrl: './education-reports.component.html',
  styleUrls: ['./education-reports.component.css'],
  providers: [EducationReportService]
})
export class EducationReportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
