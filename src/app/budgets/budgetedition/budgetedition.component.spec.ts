import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgeteditionComponent } from './budgetedition.component';

describe('BudgeteditionComponent', () => {
  let component: BudgeteditionComponent;
  let fixture: ComponentFixture<BudgeteditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgeteditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgeteditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
