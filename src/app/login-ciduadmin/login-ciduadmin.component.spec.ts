import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCiduadminComponent } from './login-ciduadmin.component';

describe('LoginCiduadminComponent', () => {
  let component: LoginCiduadminComponent;
  let fixture: ComponentFixture<LoginCiduadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCiduadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCiduadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
