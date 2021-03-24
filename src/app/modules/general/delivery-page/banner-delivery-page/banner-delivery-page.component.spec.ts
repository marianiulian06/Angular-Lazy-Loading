import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDeliveryPageComponent } from './banner-delivery-page.component';

describe('BannerDeliveryPageComponent', () => {
  let component: BannerDeliveryPageComponent;
  let fixture: ComponentFixture<BannerDeliveryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerDeliveryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerDeliveryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
