import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as $ from 'jquery';
import { counterComponent } from './home-page/counter/counter.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: [
  //   trigger('divState', [
  //     state('inactive', style({
  //       'background-color': '#8CC63F',
  //       transform: 'scale(1)'
  //     })),
  //     state('active', style({
  //       'background-color': '#cfd8dc',
  //       transform: 'scale(1.1)'
  //     })),
  //     transition('inactive => active', animate('100ms ease-in')),
  //     transition('active => inactive', animate('100ms ease-out'))
  //   ])
  // ]
})

export class AppComponent {
  // state='inactive';
  loadedFeature = 'article';

  // toggleState() {
  //   this.state = this.state === 'active' ? 'inactive' : 'active';
  // }
  //
  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }
}
