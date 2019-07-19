import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetcComponent } from './projetc.component';

describe('ProjetcComponent', () => {
  let component: ProjetcComponent;
  let fixture: ComponentFixture<ProjetcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
