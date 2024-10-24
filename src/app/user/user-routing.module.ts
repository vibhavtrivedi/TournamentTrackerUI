import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { authGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'userList',
    component: UserListComponent,
    canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule],
  exports: [RouterModule],
  providers: [UserService],
})
export class UserRoutingModule {}
