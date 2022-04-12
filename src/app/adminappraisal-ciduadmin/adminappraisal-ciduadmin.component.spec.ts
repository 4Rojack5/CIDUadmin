import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminappraisalCiduadminComponent } from './adminappraisal-ciduadmin.component';

describe('AdminappraisalCiduadminComponent', () => {
  let component: AdminappraisalCiduadminComponent;
  let fixture: ComponentFixture<AdminappraisalCiduadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminappraisalCiduadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminappraisalCiduadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
