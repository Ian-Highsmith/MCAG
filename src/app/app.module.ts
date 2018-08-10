import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { ArticleItemComponent } from './articles/article-list/article-item/article-item.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticleStartComponent } from './articles/article-start/article-start.component';
import { ArticleService } from './articles/article.service';
import { EducationReportService } from './education-reports/education-report.service';
import { EducationReportsComponent } from './education-reports/education-reports.component';
import { EducationReportDetailComponent } from './education-reports/education-report-detail/education-report-detail.component';
import { EducationReportListComponent } from './education-reports/education-report-list/education-report-list.component';
import { EducationReportItemComponent } from './education-reports/education-report-list/education-report-item/education-report-item.component';
import { SageTipsComponent } from './sage-tips/sage-tips.component';
import { SageTipDetailComponent } from './sage-tips/sage-tip-detail/sage-tip-detail.component';
import { SageTipListComponent } from './sage-tips/sage-tip-list/sage-tip-list.component';
import { SageTipItemComponent } from './sage-tips/sage-tip-list/sage-tip-item/sage-tip-item.component';
import { SageTipService } from './sage-tips/sage-tip.service';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticlesComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    ArticleItemComponent,
    ArticleStartComponent,
    EducationReportsComponent,
    EducationReportDetailComponent,
    EducationReportListComponent,
    EducationReportItemComponent,
    SageTipsComponent,
    SageTipDetailComponent,
    SageTipListComponent,
    SageTipItemComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ArticleService, EducationReportService, SageTipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
