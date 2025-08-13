// src/app/pages/login/login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ for *ngIf, *ngFor, etc.
import { FormsModule } from '@angular/forms';   // ✅ for [(ngModel)]
import { RouterModule } from '@angular/router'; // ✅ if you use routerLink

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor() {}

  login() {
    this.errorMessage = '';

    if (!this.username || !this.password) {
      this.errorMessage = 'Please fill in both username and password';
      return;
    }

    // Example login logic
    if (this.username !== 'admin' || this.password !== 'admin') {
      this.errorMessage = 'Invalid credentials';
    } else {
      // TODO: handle successful login (e.g., navigate to dashboard)
    }
  }
}
