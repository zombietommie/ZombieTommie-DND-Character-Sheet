import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermainpageComponent } from './usermainpage.component';

describe('UsermainpageComponent', () => {
  let component: UsermainpageComponent;
  let fixture: ComponentFixture<UsermainpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsermainpageComponent]
    });
    fixture = TestBed.createComponent(UsermainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
