import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
@NgModule({
  declarations: [], // ✅ Remove all standalone components from here
  imports: [
    BrowserModule,
    AppComponent,       // ✅ Standalone component imported here
    LoginComponent,     // ✅
    DashboardComponent  // ✅
  ],
  providers: [],
  bootstrap: [AppComponent] // ✅ Bootstrap still works normally
})
export class AppModule { }