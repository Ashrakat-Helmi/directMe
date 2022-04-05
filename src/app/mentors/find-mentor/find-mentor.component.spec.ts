import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMentorComponent } from './find-mentor.component';

describe('FindMentorComponent', () => {
  let component: FindMentorComponent;
  let fixture: ComponentFixture<FindMentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindMentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
