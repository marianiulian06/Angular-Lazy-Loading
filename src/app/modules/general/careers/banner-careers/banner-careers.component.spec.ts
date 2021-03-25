import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCareersComponent } from './banner-careers.component';

describe('BannerCareersComponent', () => {
  let component: BannerCareersComponent;
  let fixture: ComponentFixture<BannerCareersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerCareersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
