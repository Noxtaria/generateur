import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreidentiteComponent } from './preidentite.component';

describe('PreidentiteComponent', () => {
  let component: PreidentiteComponent;
  let fixture: ComponentFixture<PreidentiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreidentiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreidentiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
