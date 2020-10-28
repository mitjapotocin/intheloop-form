import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'f-dropdown',
  template: `
    <div class="dropdown" [hidden]="!showDropdown">
      <ul *ngIf="usersOptionsAvailable()">
        <li *ngFor="let user of users" (mousedown)="handleClick(user)">
          <p class="name">
            {{ user.name }}
          </p>
          <p class="email">
            {{ user.email }}
          </p>
        </li>
      </ul>
      <div class="no-contacts" *ngIf="!usersOptionsAvailable()">
        No available contacts...
      </div>
    </div>
  `,
  styleUrls: ['./loop-dropdown.component.scss'],
})
export class LoopDropdownComponent {
  title = 'dropdown';

  @Input() users: { name: string; email: string }[];
  @Input() showDropdown: string;
  @Output() eventUserClicked = new EventEmitter();

  handleClick(user) {
    this.eventUserClicked.emit(user);
  }

  usersOptionsAvailable() {
    return this.users && this.users.length;
  }
}
