import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MProfileComponent } from './m-profile.component';

describe('MProfileComponent', () => {
  let component: MProfileComponent;
  let fixture: ComponentFixture<MProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
