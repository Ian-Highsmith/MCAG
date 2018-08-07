import { EducationReport } from './education-report.model';
import { Injectable } from '@angular/core';

@Injectable()
export class EducationReportService {

  private educationReports: EducationReport[] = [
    new EducationReport('Education News Story', 'test content test content test content test content test content test content test content test content test content test content test content test content test content test content test content'),
    new EducationReport('Education News Story 2', 'test content test content test content test content test content test content test content test content test content test content test content test content test content test content test content')
  ];

  constructor() {}

  getEducationReports() {
    return this.educationReports.slice();
  }

  getEducationReport(index: number) {
    return this.educationReports[index];
  }
}
