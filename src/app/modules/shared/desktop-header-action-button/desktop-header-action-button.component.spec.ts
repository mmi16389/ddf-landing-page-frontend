import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopHeaderActionButtonComponent } from './desktop-header-action-button.component';

describe('DesktopHeaderActionButtonComponent', () => {
  let component: DesktopHeaderActionButtonComponent;
  let fixture: ComponentFixture<DesktopHeaderActionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopHeaderActionButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopHeaderActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
