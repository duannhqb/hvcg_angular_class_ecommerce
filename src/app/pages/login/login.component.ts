import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUserLogin } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public userService: UserService) { }

  userForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  });

  ngOnInit(): void {
  }

  public userLogin(): void {
    
    const body = {
      email: this.userForm.controls.email.value,
      password: this.userForm.controls.password.value
    }
    
    // console.log(body);
    
  }

}

// template driven form--> don gian, it chuc nang-->dung cho cac form don gian
// reactive form-->phuc tap-->qua phuc tap--> nhieu chuc nang->add product, regsiter something