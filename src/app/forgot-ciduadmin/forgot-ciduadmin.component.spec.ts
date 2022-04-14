import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotCiduadminComponent } from './forgot-ciduadmin.component';

describe('ForgotCiduadminComponent', () => {
  let component: ForgotCiduadminComponent;
  let fixture: ComponentFixture<ForgotCiduadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotCiduadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotCiduadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
