import { Component } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent {
  username: string = '';
  password: string = '';
  showSuccess: boolean = false;
  showFailed: boolean = false;

  // need a database that stores usernames and passwords.
  storedUser: string = 'tommy';
  storedPass: string = 'zombie';

  onSubmit() {
    console.log('Username is ' + this.username);
    if (
      this.username === this.storedUser &&
      this.password === this.storedPass
    ) {
      console.log('Login successful');
      this.clear();
      this.showSuccess = true;

    } else {
      console.log('Login failed, wrong user or password!');
      this.clear();
      this.showFailed = true;
    }
  }

  clear() {
    this.username = '';
    this.password = '';
    this.showFailed = false;
    this.showSuccess = false;
  }
}
