import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousrequestComponent } from './previousrequest.component';

describe('PreviousrequestComponent', () => {
  let component: PreviousrequestComponent;
  let fixture: ComponentFixture<PreviousrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
