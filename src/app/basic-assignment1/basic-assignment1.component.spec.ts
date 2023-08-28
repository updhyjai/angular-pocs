import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAssignment1Component } from './basic-assignment1.component';

describe('BasicAssignment1Component', () => {
  let component: BasicAssignment1Component;
  let fixture: ComponentFixture<BasicAssignment1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicAssignment1Component]
    });
    fixture = TestBed.createComponent(BasicAssignment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
