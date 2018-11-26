import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTainingComponent } from './current-taining.component';

describe('CurrentTainingComponent', () => {
  let component: CurrentTainingComponent;
  let fixture: ComponentFixture<CurrentTainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentTainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
