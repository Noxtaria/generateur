import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrewebComponent } from './preweb.component';

describe('PrewebComponent', () => {
  let component: PrewebComponent;
  let fixture: ComponentFixture<PrewebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrewebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrewebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
