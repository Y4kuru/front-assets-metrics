import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtComponent } from './realt.component';

describe('RealtComponent', () => {
  let component: RealtComponent;
  let fixture: ComponentFixture<RealtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealtComponent]
    });
    fixture = TestBed.createComponent(RealtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
