import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarLoginComponent } from './snackbar-login.component';

describe('SnackbarLoginComponent', () => {
  let component: SnackbarLoginComponent;
  let fixture: ComponentFixture<SnackbarLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnackbarLoginComponent],
    });
    fixture = TestBed.createComponent(SnackbarLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
