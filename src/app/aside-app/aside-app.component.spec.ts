import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideAppComponent } from './aside-app.component';

describe('AsideAppComponent', () => {
  let component: AsideAppComponent;
  let fixture: ComponentFixture<AsideAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
