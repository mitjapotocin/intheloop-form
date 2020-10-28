import { Component, Input } from '@angular/core';

@Component({
  selector: 'success-message',
  template: `
    <div class="wrapper" *ngIf="selectedUsers()">
      <p>
        Shared "{{ formData.message }}" with
        <span *ngFor="let user of formData.selectedUsers; index as i">
          <span *ngIf="i > 0">, </span>
          <span class="name">{{ user.name }}</span></span
        >.
      </p>
    </div>
    <div class="wrapper danger" *ngIf="!selectedUsers()">
      <p>Select at least one looper...</p>
    </div>
  `,
  styleUrls: ['./success-message.component.scss'],
})
export class SuccessMessageComponent {
  title = 'success-message';

  @Input() formData: { message: string; selectedUsers: [] };

  selectedUsers() {
    return this.formData.selectedUsers.length;
  }
}
