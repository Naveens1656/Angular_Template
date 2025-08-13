// src/app/app.component.ts (or app.ts in your case)
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet], // 👈 this makes <router-outlet> work
})
export class AppComponent {}
