import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedInSubject = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedInSubject.asObservable();

  login(email: string, password: string): void {
    console.log('login', email, password);
    this.loggedInSubject.next(true);
  }

  logout(): void {
    this.loggedInSubject.next(false);
  }

  forgotPassword(email: string): void {
    console.log('reset password', email);
  }
}
