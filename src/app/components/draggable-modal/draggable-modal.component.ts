import {
  Component,
  Input,
  Output,
  ContentChild,
  TemplateRef,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { Dialog } from 'primeng/dialog';
import {
  DIRECTION,
  DefaultObject,
  Direction,
} from 'src/app/models/draggable-modal.models';

@Component({
  selector: 'app-draggable-modal',
  templateUrl: './draggable-modal.component.html',
})
export class DraggableModalComponent {
  @Input() visible: boolean = false;
  @Input() header: string = '';
  @Input() position: Direction = DIRECTION.DEFAULT;
  @Input() style: DefaultObject = {};

  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ContentChild('body', { static: true }) body: TemplateRef<any> | undefined;

  @ViewChild('draggableModal') draggableModal: Dialog | undefined;

  constructor() {}

  onDraggableModalClose() {
    this.visibleChange.emit(false);
  }
}
