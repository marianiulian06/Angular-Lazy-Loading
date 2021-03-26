import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListBannerComponent } from './menu-list-banner.component';

describe('MenuListBannerComponent', () => {
  let component: MenuListBannerComponent;
  let fixture: ComponentFixture<MenuListBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuListBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
