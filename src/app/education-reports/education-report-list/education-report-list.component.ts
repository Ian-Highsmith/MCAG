import { Component, OnInit } from '@angular/core';
import { EducationReport } from '../education-report.model';
import { EducationReportService } from '../education-report.service';

@Component({
  selector: 'app-education-report-list',
  templateUrl: './education-report-list.component.html',
  styleUrls: ['./education-report-list.component.css']
})
export class EducationReportListComponent implements OnInit {
  educationReports: EducationReport[];

  constructor(private educationReportService: EducationReportService) { }

  ngOnInit() {
    this.educationReports = this.educationReportService.getEducationReports();
  }

}
