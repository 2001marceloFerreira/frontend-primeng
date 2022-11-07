import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/user';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: User[] = new Array<User>;
  first = 0;
  rows = 10;
  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    // Get Users from UserService
    // this.userList = this.userService.getUsers();
    this.getUsers()

  }
  getUsers() {
    this.userService.getUsers().subscribe(
      (response) => {
        this.userList = [...response];
      }
    )
  }
  next() {
    this.first = this.first + this.rows;
  }
  prev() {
    this.first = this.first - this.rows;
  }
  reset() {
    this.first = 0;
  }
  isLastPage(): boolean {
    return this.userList ? this.first === (this.userList.length - this.rows) : true;
  }
  isFirstPage(): boolean {
    return this.userList ? this.first === 0 : true;
  }
  //****************PrimeNG DataTable Pagination Method End*********************** */
  // ********************User To Remove User from User List*************************/
  remove(id: number) {

    this.userService.removeUser(id).subscribe()
    return window.location.reload();

    //   this.userList = this.userService.getUsers();
  }
}
