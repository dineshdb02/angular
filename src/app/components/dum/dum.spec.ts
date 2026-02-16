import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dum } from './dum';

describe('Dum', () => {
  let component: Dum;
  let fixture: ComponentFixture<Dum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dum]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dum);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
