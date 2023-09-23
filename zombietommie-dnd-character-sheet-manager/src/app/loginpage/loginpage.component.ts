import { Component } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent {
  username: string = '';
  password: string = '';
  show: boolean = false;

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
      this.show = true;
      
    } else {
      console.log('Login failed, wrong user or password!');
    }
    this.clear();
  }

  clear() {
    this.username = '';
    this.password = '';
  }
}
