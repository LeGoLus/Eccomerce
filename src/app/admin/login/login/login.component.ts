import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { UserService } from 'src/app/share/user.service';
import { Router } from '@angular/router';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/share/dialog/dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  customError2 = {status: false, message:''};

  constructor(
    private fb: FormBuilder,
    private userService:UserService,
    private router: Router,
    public dialog: MatDialog,
  ) {

      this.loginForm = this.fb.group({
        username: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });

  }

  ngOnInit(): void {
    console.log('environment--', environment.api_url);
  }
  get flog() { return this.loginForm.controls; }

  async userLogin(){
    console.log('userLogin');
    if (!this.loginForm.invalid) { //--Checks form input validity
        //--Form input is valid
        const data = await this.userService.userLogin(this.loginForm.value);
        console.log('data-login-', data);
        if(data && !data.error){
          //-- success
          sessionStorage.setItem("user-data", JSON.stringify(data.data));
          let user = JSON.parse(sessionStorage.getItem("user-data"));
          // console.log('user-login-', user);
          // alert('Register Success! \n Please login');

          let _html=`
                  <div class="c-green">
                    <div class="material-icons">task_alt</div>
                    <h1>Login Success!</h1>
                  </div>`;
          this.openDialog(_html);

          this.loginForm.reset();
          this.router.navigate(["my-account"]);
        }else{
          //-- Fail
          this.customError2.status = true;
          this.customError2.message = data.message;
          console.log('this.customError2--', this.customError2);
        }
    } else {
        //--Form input is not valid
        this.loginForm.markAllAsTouched(); //--Trigger validation across form
        console.log('block submission');
    }
  }

  openDialog(_html) {
    // console.log('_html-', _html);
    let dialogRef = this.dialog.open(DialogComponent, {
        data: {
          html: _html,
        }
    });
    setTimeout(() => {
      dialogRef.close();
    }, 2000);
  }
}
