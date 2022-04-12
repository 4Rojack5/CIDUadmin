import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCiduadminComponent } from './profile-ciduadmin.component';

describe('ProfileCiduadminComponent', () => {
  let component: ProfileCiduadminComponent;
  let fixture: ComponentFixture<ProfileCiduadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCiduadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCiduadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
