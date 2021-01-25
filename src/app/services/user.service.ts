import { Injectable } from '@angular/core';
import { IUserLogin } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public login(user: IUserLogin){
    console.log('UserService->Login', user);
    // `http://165.22.103.200:8083/auth/login`
  }
}
