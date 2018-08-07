import { Article } from './article.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticleService {

  private articles: Article[] = [
    new Article('Cabrini College News Story', 'test content test content test content test content test content test content test content test content test content test content test content test content test content test content test content',
  'https://cathyyungmann.files.wordpress.com/2010/11/screen-shot-2010-11-06-at-10-03-20-pm.png'),
    new Article('Cabrini College News Story 2', 'test content test content test content test content test content test content test content test content test content test content test content test content test content test content test content',
  'https://cathyyungmann.files.wordpress.com/2010/11/screen-shot-2010-11-06-at-10-03-20-pm.png')
  ];

  constructor() {}

  getArticles() {
    return this.articles.slice();
  }

  getArticle(index: number) {
    return this.articles[index];
  }
}
