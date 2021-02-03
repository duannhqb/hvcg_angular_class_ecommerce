import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUserRegister } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  userForm!: FormGroup;

  constructor(public userService: UserService, public fb: FormBuilder ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: [''],
      email: ['', [Validators.required, Validators.email, Validators.pattern('"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"')]],
      password: ['', Validators.required],
      confirm_password: ['']
    }); 

  }

  public userSignup(){
    console.log(this.userForm);
    console.log(this.userForm.controls.username.value);
    console.log(this.userForm.controls.email.value);
    console.log(this.userForm.controls.password.value);
    console.log(this.userForm.controls.confirm_password.value);
  }

}
