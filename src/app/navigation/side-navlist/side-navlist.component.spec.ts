import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavlistComponent } from './side-navlist.component';

describe('SideNavlistComponent', () => {
  let component: SideNavlistComponent;
  let fixture: ComponentFixture<SideNavlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
