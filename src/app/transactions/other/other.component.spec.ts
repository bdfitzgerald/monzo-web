import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsOther } from './other.component';

describe('TransactionsOther', () => {
  let component: TransactionsOther;
  let fixture: ComponentFixture<TransactionsOther>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsOther ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsOther);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
