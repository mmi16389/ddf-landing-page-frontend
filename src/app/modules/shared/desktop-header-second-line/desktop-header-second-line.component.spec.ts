import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopHeaderSecondLineComponent } from './desktop-header-second-line.component';

describe('DesktopHeaderSecondLineComponent', () => {
  let component: DesktopHeaderSecondLineComponent;
  let fixture: ComponentFixture<DesktopHeaderSecondLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopHeaderSecondLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopHeaderSecondLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
