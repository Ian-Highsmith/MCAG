import { Component, OnInit } from '@angular/core';
import { Article } from './article.model';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  providers: [ArticleService]
})
export class ArticlesComponent implements OnInit {
  selectedArticle: Article;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.articleSelected
    .subscribe(
      (article: Article) => {
        this.selectedArticle = article;
      }
    );
  }

}
