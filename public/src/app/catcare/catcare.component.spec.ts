import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatcareComponent } from './catcare.component';

describe('CatcareComponent', () => {
  let component: CatcareComponent;
  let fixture: ComponentFixture<CatcareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatcareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
