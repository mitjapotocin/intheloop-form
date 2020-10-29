import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'f-dropdown',
  template: `
    <div class="dropdown" [hidden]="!showDropdown">
      <ul *ngIf="usersOptionsAvailable()">
        <li
          *ngFor="let user of users; index as i"
          (mousedown)="handleClick(user)"
          [class.selected]="i === selectedIndex"
        >
          <!-- <div [class.selected]="i === selectedIndex"> -->
          <p class="name">
            {{ user.name }}
          </p>
          <p class="email">
            {{ user.email }}
          </p>
          <!-- </div> -->
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
  @Input() selectedIndex: number;
  @Output() eventUserClicked = new EventEmitter();

  handleClick(user: { name: string; email: string }) {
    this.eventUserClicked.emit(user);
  }

  usersOptionsAvailable() {
    return this.users && this.users.length;
  }
}
