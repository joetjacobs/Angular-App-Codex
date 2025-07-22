import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ForgotPasswordComponent } from './forgot-password.component';
import { AuthService } from './auth.service';

class MockAuthService {
  forgotPassword() {}
}

describe('ForgotPasswordComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
      declarations: [ForgotPasswordComponent],
      providers: [{ provide: AuthService, useClass: MockAuthService }]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ForgotPasswordComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
