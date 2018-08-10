import { SageTip } from './sage-tip.model';
import { Injectable } from '@angular/core';

@Injectable()
export class SageTipService {

  private sageTips: SageTip[] = [
    new SageTip('SAGE TIP 1', 'How To Save For College How To Save For College How To Save For College How To Save For College How To Save For College How To Save For College How To Save For College',
  'https://previews.123rf.com/images/akiradesigns/akiradesigns1310/akiradesigns131000083/22528727-cartoon-vector-illustration-of-porr-man-and-woman-thinking-about-money.jpg'),
    new SageTip('SAGE TIP 2', 'How To Choose Your Dream School',
  'http://tadalafilforsale.net/data/media/90/61593586.jpg')
  ];

  constructor() {}

  getSageTips() {
    return this.sageTips.slice();
  }

  getSageTip(index: number) {
    return this.sageTips[index];
  }
}
