import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersData } from './models/users.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseURL = 'http://localhost:3000/users';


  constructor(private http : HttpClient) { }


  getData () {
    return this.http.get<Array<UsersData>>(this.baseURL)
  }

  getEntry( id ) {
    return this.http.get<UsersData>(this.baseURL + "/" + id)
  }

  addEntry = (users: UsersData) => {
    return this.http.post<UsersData>(this.baseURL, {
      "username": users.username,
      "password": users.password,
      "permissions": users.permissions
      
    });
  };

  deleteEntry( id ){
    return this.http.delete(this.baseURL + "/" + id)
  }

  editEntry = (users: UsersData) => {
    return this.http.put(this.baseURL + '/' + users.id, {
      "id": users.id,
      "username": users.username,
      "password": users.password,
      "permissions": users.permissions
      
    });
  };
}
