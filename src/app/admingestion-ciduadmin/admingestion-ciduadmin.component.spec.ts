import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmingestionCiduadminComponent } from './admingestion-ciduadmin.component';

describe('AdmingestionCiduadminComponent', () => {
  let component: AdmingestionCiduadminComponent;
  let fixture: ComponentFixture<AdmingestionCiduadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmingestionCiduadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmingestionCiduadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
