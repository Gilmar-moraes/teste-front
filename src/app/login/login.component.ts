import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div>
      <label for="username">Username:</label>
      <input id="username" type="text" [(ngModel)]="teste" />
      <button (click)="login()">Login</button>
    </div>
  `,
  styles: [],
})
export class LoginComponent {
  username: string = '';

  login() {
    localStorage.setItem('username', this.username);
  }
}
