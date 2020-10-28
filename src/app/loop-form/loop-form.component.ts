import { Component } from '@angular/core';

@Component({
  selector: 'loop-form',
  templateUrl: './loop-form.component.html',
  styleUrls: ['./loop-form.component.scss'],
})
export class LoopFormComponent {
  title = 'loop-form';

  //static content
  selectedEmail = {
    from: { name: 'Mitja Potocin', email: 'mitja.potocin@gmail.com' },
    to: [
      { name: 'Jobs', email: 'jobs@intheloop.com' },
      { name: 'CTO', email: 'cto@intheloop.com' },
    ],
    subject: 'Frontend developer',
    body:
      'I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me and the success of your organization.',
    replays: 1,
    time: '23:59',
  };
  users = [
    { name: 'Harvey Flash', email: 'harvey.flash@gmail.com' },
    { name: 'Madison Helman', email: 'madison.helman@gmail.com' },
    { name: 'Janessa Weisenberger', email: 'janessa.weisenberger@gmail.com' },
    { name: 'Irina Fierro', email: 'irina.fierro@gmail.com' },
    { name: 'Kassandra Berryhill', email: 'kassandra.berryhill@gmail.com' },
    { name: 'Kimbra Daggett', email: 'kimbra.daggett@gmail.com' },
    { name: 'Delora Janda', email: 'delora.janda@gmail.com' },
    { name: 'Keturah Tibbits', email: 'keturah.tibbits@gmail.com' },
    { name: 'Freddy Longnecker', email: 'freddy.longnecker@gmail.com' },
    { name: 'Marta Orndorff', email: 'marta.orndorff@gmail.com' },
  ];

  usersNotSelected = [...this.users];
  dropdownOptions = [];
  selectedUsers = [];
  messageInput = '';
  nameInput = '';
  showDropdown = false;
  showSuccessMessage = false;
  fieldsetDisabled = false;
  formData = {
    message: this.messageInput,
    selectedUsers: [],
  };

  onInputFocus() {
    this.showDropdown = true;
    this.filterDropdownOptions();
  }

  onInputBlur() {
    this.showDropdown = false;
  }

  updateSelectedUsers(user: { name: string; email: string }) {
    this.selectedUsers = [...this.selectedUsers, user];
    this.usersNotSelected = this.usersNotSelected.filter((user_) => {
      return !(user_.name === user.name && user_.email === user.email);
    });
    this.nameInput = '';
    this.showDropdown = false;
  }

  loopSubmit() {
    this.formData = {
      message: this.messageInput,
      selectedUsers: this.selectedUsers,
    };

    this.showSuccessMessage = true;

    if (this.formData.selectedUsers.length > 0) {
      this.fieldsetDisabled = true;
    }
  }

  removeSelected(index: number) {
    this.usersNotSelected = [
      ...this.usersNotSelected,
      this.selectedUsers[index],
    ];

    this.selectedUsers = [
      ...this.selectedUsers.slice(0, index),
      ...this.selectedUsers.slice(index + 1),
    ];
  }

  filterDropdownOptions() {
    this.dropdownOptions = this.usersNotSelected.filter((user) => {
      return (
        user.name.toLowerCase().includes(this.nameInput.toLowerCase()) ||
        user.email.toLowerCase().includes(this.nameInput.toLowerCase())
      );
    });

    // always showing max 5 results
    this.dropdownOptions = this.dropdownOptions.slice(0, 5);
  }
}
