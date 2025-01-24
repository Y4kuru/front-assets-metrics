import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportChannelComponent } from './support-channel.component';

describe('SupportChannelComponent', () => {
  let component: SupportChannelComponent;
  let fixture: ComponentFixture<SupportChannelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupportChannelComponent]
    });
    fixture = TestBed.createComponent(SupportChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
