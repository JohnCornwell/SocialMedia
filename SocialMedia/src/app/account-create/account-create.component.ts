import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user-service.service';

/*
 * This file is responsible for creating an account for a guest
 * user. This includes validating that all required fields are
 * filled. The unique username constraint will be enforced by
 * the server.
 */

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent {

  form: FormGroup;
  passwordsDontMatch: boolean = false;
  isUsernameTaken: boolean = false;
  isAccountNotChosen: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private userService: UserService) {
    this.form = this.fb.group({
      Name: ['', Validators.required],
      Lastname: ['', Validators.required],
      Username: ['', Validators.required],
      Password: ['', Validators.required],
      PasswordCheck: ['', Validators.required]
    });
  }

  onSubmit() {
    this.createAccount(
      this.form.get('Name')?.value,
      this.form.get('Lastname')?.value,
      this.form.get('Username')?.value,
      this.form.get('Password')?.value
    );
  }

  createAccount(Name: String, Lastname: String, Username: String, Password: String) {
    /* create a new account. The password will be hashed by the database */
    this.userService.createUser(Name, Lastname, Username, Password,)
      .subscribe({
        next: (result) => {
          if (result.status != 200) {
            window.alert(result.statusText);
          } else {
            window.alert("Signup successful.");
            this.router.navigate(['/Login'])
          }
        },
        error: (err) => {
          window.alert(err.error.message);
        }
      });
  }
}