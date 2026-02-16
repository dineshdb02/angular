import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCourse } from './all-course';

describe('AllCourse', () => {
  let component: AllCourse;
  let fixture: ComponentFixture<AllCourse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCourse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCourse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
