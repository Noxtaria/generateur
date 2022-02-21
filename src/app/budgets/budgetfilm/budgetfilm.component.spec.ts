import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetfilmComponent } from './budgetfilm.component';

describe('BudgetfilmComponent', () => {
  let component: BudgetfilmComponent;
  let fixture: ComponentFixture<BudgetfilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetfilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetfilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
