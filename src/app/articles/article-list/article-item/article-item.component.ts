import { Component, OnInit, Input } from '@angular/core';

import { Article } from '../../article.model';
import { ArticleService } from '../../article.service';
@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {
  @Input() article: Article;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }

  onSelected() {
    this.articleService.articleSelected.emit(this.article);
  }
}