import { Component, OnInit } from '@angular/core';
import { SageTip } from '../sage-tip.model';
import { SageTipService } from '../sage-tip.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sage-tip-detail',
  templateUrl: './sage-tip-detail.component.html',
  styleUrls: ['./sage-tip-detail.component.css']
})
export class SageTipDetailComponent implements OnInit {
  sageTip: SageTip;
  id: number;

  constructor(private sageTipService: SageTipService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.sageTip = this.sageTipService.getSageTip(this.id);
      }
    );
  }

}
