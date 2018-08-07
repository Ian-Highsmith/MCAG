import { Component, OnInit, Input } from '@angular/core';

import { SageTip } from '../../sage-tip.model';
@Component({
  selector: 'app-sage-tip-item',
  templateUrl: './sage-tip-item.component.html',
  styleUrls: ['./sage-tip-item.component.css']
})
export class SageTipItemComponent implements OnInit {
  @Input() sageTip: SageTip;
  @Input() index: number;

  ngOnInit() {
  }

}
