import { Component, OnInit } from '@angular/core';
import { SageTip } from '../sage-tip.model';
import { SageTipService } from '../sage-tip.service';

@Component({
  selector: 'app-sage-tip-list',
  templateUrl: './sage-tip-list.component.html',
  styleUrls: ['./sage-tip-list.component.css']
})
export class SageTipListComponent implements OnInit {
  sageTips: SageTip[];

  constructor(private sageTipService: SageTipService) {
  }

  ngOnInit() {
    this.sageTips = this.sageTipService.getSageTips();
  }

}
