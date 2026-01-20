import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInsurance } from './get-insurance';

describe('GetInsurance', () => {
  let component: GetInsurance;
  let fixture: ComponentFixture<GetInsurance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetInsurance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetInsurance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
