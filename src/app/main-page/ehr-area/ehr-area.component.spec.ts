import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EhrAreaComponent } from './ehr-area.component';

describe('EhrAreaComponent', () => {
  let component: EhrAreaComponent;
  let fixture: ComponentFixture<EhrAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EhrAreaComponent]
    });
    fixture = TestBed.createComponent(EhrAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
