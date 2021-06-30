import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorrequestComponent } from './donorrequest.component';

describe('DonorrequestComponent', () => {
  let component: DonorrequestComponent;
  let fixture: ComponentFixture<DonorrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
