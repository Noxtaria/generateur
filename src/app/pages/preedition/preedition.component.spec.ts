import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreeditionComponent } from './preedition.component';

describe('PreeditionComponent', () => {
  let component: PreeditionComponent;
  let fixture: ComponentFixture<PreeditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreeditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreeditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
