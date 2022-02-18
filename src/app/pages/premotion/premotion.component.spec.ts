import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremotionComponent } from './premotion.component';

describe('PremotionComponent', () => {
  let component: PremotionComponent;
  let fixture: ComponentFixture<PremotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
