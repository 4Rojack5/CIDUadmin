import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbackgroundCiduadminComponent } from './adminbackground-ciduadmin.component';

describe('AdminbackgroundCiduadminComponent', () => {
  let component: AdminbackgroundCiduadminComponent;
  let fixture: ComponentFixture<AdminbackgroundCiduadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminbackgroundCiduadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbackgroundCiduadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
