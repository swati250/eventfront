import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieweventdetailComponent } from './vieweventdetail.component';

describe('VieweventdetailComponent', () => {
  let component: VieweventdetailComponent;
  let fixture: ComponentFixture<VieweventdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VieweventdetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VieweventdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
