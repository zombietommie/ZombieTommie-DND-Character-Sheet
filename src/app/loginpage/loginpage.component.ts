import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarLoginComponent } from './snackbar-login/snackbar-login.component';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent {
  // using http client to grab user data
  mockUsername = 'tommy';
  mockPassword = 'zombie';

  username: string = '';
  password: string = '';
  result: boolean = false;

  constructor(private _snackBar: MatSnackBar) {}

  onSubmit() {
    if (
      this.username === this.mockUsername &&
      this.password === this.mockPassword
    ) {
      this.result = true;
      this.clear();
      this._snackBar.openFromComponent(SnackbarLoginComponent, {
        duration: 5000,
        data: this.result,
      });
    } else {
      this.result = false;
      this.clear();
      this._snackBar.openFromComponent(SnackbarLoginComponent, {
        duration: 5000,
        data: this.result,
      });
    }
  }

  clear() {
    this.username = '';
    this.password = '';
  }
}
