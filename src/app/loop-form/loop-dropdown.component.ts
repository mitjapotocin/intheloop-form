import { Component, Input } from '@angular/core';

@Component({
  selector: 'f-dropdown',
  templateUrl: './loop-dropdown.component.html',
  styleUrls: ['./loop-dropdown.component.scss'],
})
export class LoopDropdownComponent {
  title = 'dropdown';
  @Input() users: any;
}
