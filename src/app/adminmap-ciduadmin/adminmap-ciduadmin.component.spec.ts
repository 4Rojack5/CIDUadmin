import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmapCiduadminComponent } from './adminmap-ciduadmin.component';

describe('AdminmapCiduadminComponent', () => {
  let component: AdminmapCiduadminComponent;
  let fixture: ComponentFixture<AdminmapCiduadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminmapCiduadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmapCiduadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
