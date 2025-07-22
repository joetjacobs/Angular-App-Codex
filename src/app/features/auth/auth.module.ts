import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { LoginComponent } from './login.component';
import { ForgotPasswordComponent } from './forgot-password.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'forgot', component: ForgotPasswordComponent }
];

@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule {}
