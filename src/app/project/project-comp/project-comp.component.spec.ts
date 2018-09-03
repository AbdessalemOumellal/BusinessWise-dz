import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCompComponent } from './project-comp.component';

describe('ProjectCompComponent', () => {
  let component: ProjectCompComponent;
  let fixture: ComponentFixture<ProjectCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
