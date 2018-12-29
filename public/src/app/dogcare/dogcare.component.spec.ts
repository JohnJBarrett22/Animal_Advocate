import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogcareComponent } from './dogcare.component';

describe('DogcareComponent', () => {
  let component: DogcareComponent;
  let fixture: ComponentFixture<DogcareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogcareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
