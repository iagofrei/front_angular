import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOption } from './interfaces/filter-options.interface';
import { filtredUserList } from './utils/filter-users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltred = this.usersList;
    }, 1);
  }
  usersList: IUser[] = [];
  usersListFiltred: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOption) {
    console.log(filterOptions);
    this.usersListFiltred = filtredUserList(filterOptions, this.usersList);
  }

}
