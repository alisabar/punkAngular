import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideTopComponent } from './aside-top.component';

describe('AsideTopComponent', () => {
  let component: AsideTopComponent;
  let fixture: ComponentFixture<AsideTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
