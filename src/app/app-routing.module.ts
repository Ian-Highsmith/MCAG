import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesComponent } from './articles/articles.component';
import { ArticleStartComponent } from './articles/article-start/article-start.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';

import { EducationReportsComponent } from './education-reports/education-reports.component';
import { EducationReportDetailComponent } from './education-reports/education-report-detail/education-report-detail.component';

import { SageTipsComponent } from './sage-tips/sage-tips.component';
import { SageTipDetailComponent } from './sage-tips/sage-tip-detail/sage-tip-detail.component';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes: Routes = [
  // { path: '', redirectTo: '/articles', pathMatch: 'full' },
  // { path: '', redirectTo: HomePageComponent, pathMatch: 'full' },
    // { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: HomePageComponent },
    { path: 'articles', component: ArticlesComponent, children: [
    { path: ':id', component: ArticleDetailComponent }
  ] },

  { path: 'educationReports', component: EducationReportsComponent, children: [
    { path: ':id', component: EducationReportDetailComponent }
  ] },
  { path: 'sageTips', component: SageTipsComponent, children: [
    { path: ':id', component: SageTipDetailComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
