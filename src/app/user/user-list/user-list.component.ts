import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from '../user.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  public userData: UserModel[]  = [];
  private subscription: Subscription | undefined;
  pageNumber:number = 1;
  pageSize:number = 5;
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData() {
    this.subscription = this.userService.getUser(this.pageNumber, this.pageSize).subscribe((data: UserModel[]) => {
      if (data) {
        this.userData = data;
      } else {
        console.log("There is no data");
      }
    })
  }

  nextPage() {
    this.pageNumber++;
    this.getUsersData();
  }
  previousPage() {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.getUsersData();
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
