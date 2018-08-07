import { Component, OnInit } from '@angular/core';

import { SageTipService } from './sage-tip.service';

@Component({
  selector: 'app-sage-tips',
  templateUrl: './sage-tips.component.html',
  styleUrls: ['./sage-tips.component.css'],
  providers: [SageTipService]
})
export class SageTipsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
