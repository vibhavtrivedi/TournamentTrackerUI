import { Component } from '@angular/core';
import { RegisterModel } from '../auth.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  providers: [AuthService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerData: RegisterModel | undefined;

  registrationForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  submit() {
    if (this.registrationForm.valid) {
      this.registerUser(this.registrationForm.value)
    }
  }

  registerUser(registerData: RegisterModel) {
    console.log(registerData);
    this.authService.registerUser(registerData).subscribe((data) => {
      console.log("data", data);
    })
  }
}
