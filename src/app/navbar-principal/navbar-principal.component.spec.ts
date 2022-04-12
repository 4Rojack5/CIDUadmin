import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPrincipalComponent } from './navbar-principal.component';

describe('NavbarPrincipalComponent', () => {
  let component: NavbarPrincipalComponent;
  let fixture: ComponentFixture<NavbarPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
