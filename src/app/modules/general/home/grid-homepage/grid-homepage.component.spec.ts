import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridHomepageComponent } from './grid-homepage.component';

describe('GridHomepageComponent', () => {
  let component: GridHomepageComponent;
  let fixture: ComponentFixture<GridHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
