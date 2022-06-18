import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private localStorageService: LocalStorageService,
    private authService: AuthService,
  ) {
    this.loginForm = formBuilder.group(
      {
        email: new FormControl(null,Validators.compose([
          Validators.required,
          Validators.pattern("[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"),
        ])),
        password: new FormControl(null,Validators.compose([
          Validators.required
        ])),
      }
    );
  }

  ngOnInit(): void {
  }

  login(form: FormGroup) {
    this.apiService.login(form.value.email.trim(),form.value.password.trim()).subscribe(
      (data) => {
        if(data.length > 0) {
          this.localStorageService.setOnLocalStorage(this.authService.USER_KEY,data[0]);
          this.router.navigate(['home']);
        }
      }
    );
  }

}
