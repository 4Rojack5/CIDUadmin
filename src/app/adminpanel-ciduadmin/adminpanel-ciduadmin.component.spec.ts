import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpanelCiduadminComponent } from './adminpanel-ciduadmin.component';

describe('AdminpanelCiduadminComponent', () => {
  let component: AdminpanelCiduadminComponent;
  let fixture: ComponentFixture<AdminpanelCiduadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpanelCiduadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpanelCiduadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
