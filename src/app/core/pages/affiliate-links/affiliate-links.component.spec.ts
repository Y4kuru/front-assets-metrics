import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateLinksComponent } from './affiliate-links.component';

describe('AffiliateLinksComponent', () => {
  let component: AffiliateLinksComponent;
  let fixture: ComponentFixture<AffiliateLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffiliateLinksComponent]
    });
    fixture = TestBed.createComponent(AffiliateLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
