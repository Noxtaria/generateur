import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefilmComponent } from './prefilm.component';

describe('PrefilmComponent', () => {
  let component: PrefilmComponent;
  let fixture: ComponentFixture<PrefilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrefilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
