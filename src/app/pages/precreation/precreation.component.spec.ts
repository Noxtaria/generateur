import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecreationComponent } from './precreation.component';

describe('PrecreationComponent', () => {
  let component: PrecreationComponent;
  let fixture: ComponentFixture<PrecreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrecreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
