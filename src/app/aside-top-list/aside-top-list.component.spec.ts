import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideTopListComponent } from './aside-top-list.component';

describe('AsideTopListComponent', () => {
  let component: AsideTopListComponent;
  let fixture: ComponentFixture<AsideTopListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideTopListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideTopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
