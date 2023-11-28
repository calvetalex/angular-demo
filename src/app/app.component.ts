import { Component } from '@angular/core';
import { DIRECTION } from './models/draggable-modal.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  visible: boolean = false;
  visibleEmpty: boolean = false;
  DIRECTION = DIRECTION;

  constructor() {}

  showDialog() {
    this.visible = true;
  }

  showEmptyDialog() {
    this.visibleEmpty = true;
  }
}
