import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationemailCiduadminComponent } from './verificationemail-ciduadmin.component';

describe('VerificationemailCiduadminComponent', () => {
  let component: VerificationemailCiduadminComponent;
  let fixture: ComponentFixture<VerificationemailCiduadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationemailCiduadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationemailCiduadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
