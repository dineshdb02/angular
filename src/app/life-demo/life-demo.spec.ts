import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeDemo } from './life-demo';

describe('LifeDemo', () => {
  let component: LifeDemo;
  let fixture: ComponentFixture<LifeDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
