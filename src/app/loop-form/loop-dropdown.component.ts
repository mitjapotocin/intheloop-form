import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'f-dropdown',
  template: `
    <div class="dropdown" [hidden]="!showDropdown">
      <ul *ngIf="usersOptions()">
        <li *ngFor="let user of users" (click)="handleClick(user)">
          <p class="name">
            {{ user.name }}
          </p>
          <p class="email">
            {{ user.email }}
          </p>
        </li>
      </ul>
      <div *ngIf="!usersOptions()">No available contacts...</div>
    </div>
  `,
  styleUrls: ['./loop-dropdown.component.scss'],
})
export class LoopDropdownComponent {
  title = 'dropdown';
  @Input() users: Array<object>;
  @Input() showDropdown: boolean;
  @Output() eventUserClicked = new EventEmitter();

  handleClick(user) {
    this.eventUserClicked.emit(user);
  }

  usersOptions() {
    return this.users && this.users.length;
  }
}
