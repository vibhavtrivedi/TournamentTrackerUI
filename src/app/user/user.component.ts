import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from './user.service';
import { UserModel } from './user.model';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../utils/api.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  providers:[UserService],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  contactForm: FormGroup;
  public usersData: UserModel | undefined;
  public userData: UserModel | undefined;
  constructor(private fb: FormBuilder, private userService:UserService) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      cellPhoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.createUser(this.contactForm.value)
    }
  }
  createUser(user: UserModel): any {
    this.userService.createUser(user).subscribe((data:UserModel) => {
      this.userData = data;
    })
  }
}
