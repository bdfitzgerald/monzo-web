import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositsComponent } from './deposits.component';

describe('DepositsComponent', () => {
  let component: DepositsComponent;
  let fixture: ComponentFixture<DepositsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
