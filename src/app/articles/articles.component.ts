import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  providers: [ArticleService]
})
export class ArticlesComponent implements OnInit {
  imgSrc = 'http://www.collegerank.net/wp-content/uploads/2015/08/morehouse-college-quad.jpg';
  constructor() { }

  ngOnInit() {
  }

}
