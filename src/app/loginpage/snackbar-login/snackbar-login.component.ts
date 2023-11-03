import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-snackbar-login',
  templateUrl: './snackbar-login.component.html',
  styleUrls: ['./snackbar-login.component.css'],
})
export class SnackbarLoginComponent {
  @Input() loginResult = false;
}
