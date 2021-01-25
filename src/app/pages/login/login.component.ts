import { Component, OnInit } from '@angular/core';
import { IUserLogin } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  public userLogin(loginForm: any): void {
    console.log(loginForm);
    
    const email = loginForm.value.email;
    const password = loginForm.value.password;
    const user: IUserLogin = {
      email,
      password
    }
    this.userService.login(user);

    
  }

}

// template driven form--> don gian, it chuc nang-->dung cho cac form don gian
// reactive form-->phuc tap-->qua phuc tap--> nhieu chuc nang->add product, regsiter something