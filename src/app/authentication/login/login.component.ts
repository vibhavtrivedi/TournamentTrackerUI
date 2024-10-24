import { Component, Directive, OnInit } from '@angular/core';
import { LoginModel } from '../auth.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AppSignalRService } from '../../app-signal-r.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: '/src/app/GlobalStyling/forms.css',
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  receivedMessage: string | undefined;

  constructor(private fb: FormBuilder, private authService: AuthService, private appSignal: AppSignalRService) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginUser(this.loginForm.value);
    }
  }

  loginUser(userData: LoginModel) {
    this.authService.loginUser(userData);
  }
}
