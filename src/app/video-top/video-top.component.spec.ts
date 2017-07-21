import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTopComponent } from './video-top.component';

describe('VideoTopComponent', () => {
  let component: VideoTopComponent;
  let fixture: ComponentFixture<VideoTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
