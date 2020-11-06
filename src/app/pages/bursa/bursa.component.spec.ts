import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BursaComponent } from './bursa.component';

describe('BursaComponent', () => {
  let component: BursaComponent;
  let fixture: ComponentFixture<BursaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BursaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BursaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
