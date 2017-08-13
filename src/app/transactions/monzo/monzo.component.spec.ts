import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonzoComponent } from './monzo.component';

describe('MonzoComponent', () => {
  let component: MonzoComponent;
  let fixture: ComponentFixture<MonzoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonzoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
