import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import {Project} from '../../Models/project.models';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-project-list-component',
  templateUrl: './project-list-component.component.html',
  styleUrls: ['./project-list-component.component.css']
})
export class ProjectListComponentComponent implements OnInit, OnDestroy {

  projects:  Project[];
  projectSubscription: Subscription;


  constructor(private projectService: ProjectService, private router: Router) {
  }

  ngOnInit() {
    this.projectSubscription = this.projectService.projectsSubject.subscribe(
      (projects: Project[]) => {
        this.projects = projects ;
      }
    );
    this.projectService.emitProjects();
  }


  onNewProject () {
    this.router.navigate(['/projects', 'project-form']);
  }

  onDeleteProject ( projet : Project) {
    this.projectService.removeProject(projet);
  }

  onViewProject() {
    this.router.navigate(['/projects', 'project']);
  }

  ngOnDestroy () {
    this.projectSubscription.unsubscribe();
  }

}
