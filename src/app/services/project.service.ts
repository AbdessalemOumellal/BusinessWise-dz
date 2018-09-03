import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Project} from '../Models/project.models';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Project[] = [];
  projectsSubject = new Subject<Project[]>();


  constructor() {
    this.getProjects();
  }


  emitProjects() {
    this.projectsSubject.next(this.projects);
  }

  saveProjects() {
    firebase.database().ref('/projects').set(this.projects);
  }

  getProjects() {
    firebase.database().ref('/projects').on('value', (data: DataSnapshot) => {
      this.projects = data.val() ? data.val() : [];
      this.emitProjects();
    });
  }

  getSingleProject(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/projects' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createProject(newProject: Project) {
    this.projects.push(newProject);
    this.saveProjects();
    this.emitProjects();
  }

  removeProject(projet: Project) {
    const projectIndexToRemove = this.projects.findIndex(
      (projectEL) => {
        if (projectEL === projet) {
          return true;
          }
      }
    );
    this.projects.splice(projectIndexToRemove,1);
    this.saveProjects();
    this.emitProjects();
  }
}


