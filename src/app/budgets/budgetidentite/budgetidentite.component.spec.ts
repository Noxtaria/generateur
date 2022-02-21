import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetidentiteComponent } from './budgetidentite.component';

describe('BudgetidentiteComponent', () => {
  let component: BudgetidentiteComponent;
  let fixture: ComponentFixture<BudgetidentiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetidentiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetidentiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
