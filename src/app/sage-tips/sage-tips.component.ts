import { Component, OnInit } from '@angular/core';

import { SageTipService } from './sage-tip.service';

@Component({
  selector: 'app-sage-tips',
  templateUrl: './sage-tips.component.html',
  styleUrls: ['./sage-tips.component.css'],
  providers: [SageTipService]
})
export class SageTipsComponent implements OnInit {
  imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Bates_College_Campus.jpg/576px-Bates_College_Campus.jpg';
  constructor() { }

  ngOnInit() {
  }

}
