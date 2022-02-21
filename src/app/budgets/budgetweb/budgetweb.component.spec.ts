import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetwebComponent } from './budgetweb.component';

describe('BudgetwebComponent', () => {
  let component: BudgetwebComponent;
  let fixture: ComponentFixture<BudgetwebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetwebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
