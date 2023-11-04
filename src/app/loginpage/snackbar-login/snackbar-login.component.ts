import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-login',
  templateUrl: './snackbar-login.component.html',
  styleUrls: ['./snackbar-login.component.css'],
})
export class SnackbarLoginComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public loginResult: boolean) {}
}
