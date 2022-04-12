import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminratesCiduadminComponent } from './adminrates-ciduadmin.component';

describe('AdminratesCiduadminComponent', () => {
  let component: AdminratesCiduadminComponent;
  let fixture: ComponentFixture<AdminratesCiduadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminratesCiduadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminratesCiduadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
