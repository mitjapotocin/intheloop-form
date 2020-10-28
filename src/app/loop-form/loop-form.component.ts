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
    to: [{ name: 'Jobs', email: 'jobs@intheloop.com' }],
    subject: 'Frontend developer',
    body:
      'I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me and the success of your organization.',
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

  usersOptions = this.users.slice(5);
  messageInput = '';
  nameInput = '';
  selectedUsers = [];
  inputFocused = false;
  showDropdown = false;

  onInputFocus() {
    this.showDropdown = true;
  }

  onInputBlur() {
    this.showDropdown = false;
  }

  updateSelectedUsers(user: object) {
    this.selectedUsers = [...this.selectedUsers, user];
    this.showDropdown = false;
  }

  loopSubmit() {
    console.log(this.messageInput, this.nameInput);
  }

  filter() {
    this.users = [];
  }
}
