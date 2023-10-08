import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SOSComponent } from './sos.component';

describe('SOSComponent', () => {
  let component: SOSComponent;
  let fixture: ComponentFixture<SOSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SOSComponent]
    });
    fixture = TestBed.createComponent(SOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
