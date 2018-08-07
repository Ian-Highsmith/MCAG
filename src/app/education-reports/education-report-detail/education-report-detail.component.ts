import { Component, OnInit } from '@angular/core';
import { EducationReport } from '../education-report.model';
import { EducationReportService } from '../education-report.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-education-report-detail',
  templateUrl: './education-report-detail.component.html',
  styleUrls: ['./education-report-detail.component.css']
})
export class EducationReportDetailComponent implements OnInit {
  educationReport: EducationReport;
  id: number;

  constructor(private educationReportService: EducationReportService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.educationReport = this.educationReportService.getEducationReport(this.id);
      }
    );
  }

}
