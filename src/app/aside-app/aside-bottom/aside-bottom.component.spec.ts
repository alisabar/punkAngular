import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideBottomComponent } from './aside-bottom.component';

describe('AsideBottomComponent', () => {
  let component: AsideBottomComponent;
  let fixture: ComponentFixture<AsideBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
