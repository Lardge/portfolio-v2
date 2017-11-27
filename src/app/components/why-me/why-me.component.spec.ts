import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyMeComponent } from './why-me.component';

describe('WhyMeComponent', () => {
  let component: WhyMeComponent;
  let fixture: ComponentFixture<WhyMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
