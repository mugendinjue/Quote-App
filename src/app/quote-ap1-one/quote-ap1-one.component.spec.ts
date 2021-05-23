import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteAp1OneComponent } from './quote-ap1-one.component';

describe('QuoteAp1OneComponent', () => {
  let component: QuoteAp1OneComponent;
  let fixture: ComponentFixture<QuoteAp1OneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteAp1OneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteAp1OneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
