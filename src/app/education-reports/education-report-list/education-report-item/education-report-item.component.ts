import { Component, OnInit, Input } from '@angular/core';

import { EducationReport } from '../../education-report.model';
@Component({
  selector: 'app-education-report-item',
  templateUrl: './education-report-item.component.html',
  styleUrls: ['./education-report-item.component.css']
})
export class EducationReportItemComponent implements OnInit {
  @Input() educationReport: EducationReport;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
