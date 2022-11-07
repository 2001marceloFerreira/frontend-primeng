import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userList: User[] = [{
    id: 1,
    name: 'Marcelo Gatao',
    dob: new Date('08/31/1992'),
    email: 'marcelo@gmail.com',
    gender: 'Masculino',
    mobile: '8978786933',
    isActive: true,
    userType: 'Admin'
  }];
  constructor(
    private httpClient: HttpClient
  ) { }
  getUsers() {
    return this.httpClient.get<Array<User>>('http://localhost:8080/api/user');
    // return this.userList
  }
  getUsersByID(id: number): Observable<User> {
    return this.httpClient.get<User>(`http://localhost:8080/api/user/${id}`);
    // return this.userList.find(x => x.id == id)
  }
  addUser(user: User) {
    return this.httpClient.post<User>('http://localhost:8080/api/user', user);

    // user.id = new Date().getTime();
    // this.userList.push(user);
  }
  updateUser(id: Number | null, request: User) {
    return this.httpClient.put<User>(`http://localhost:8080/api/user/${id}`, request);
    // const userIndex = this.userList.findIndex(x => x.id == user.id);
    // if (userIndex != null && userIndex != undefined) {
    //   this.userList[userIndex] = user;
    // }
  }
  removeUser(id: number) {
    // this.userList = this.userList.filter(x => x.id != id);
    return this.httpClient.delete<User>(`http://localhost:8080/api/user/${id}`)
  }

}
