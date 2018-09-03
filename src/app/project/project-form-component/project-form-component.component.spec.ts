import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFormComponentComponent } from './project-form-component.component';

describe('ProjectFormComponentComponent', () => {
  let component: ProjectFormComponentComponent;
  let fixture: ComponentFixture<ProjectFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
