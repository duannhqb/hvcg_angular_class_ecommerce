import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserLogin, IUserRegister } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  public login(user: IUserLogin){
    const headers = {'Content-Type': 'application/json'}
    return this.http.post('http://localhost:8000/api/users/login', user, {headers});
  }

  public register(user: IUserRegister){
    const headers = {'Content-Type': 'application/json'}
    return this.http.post('http://localhost:8000/api/users/register', user, {headers});
  }
}
