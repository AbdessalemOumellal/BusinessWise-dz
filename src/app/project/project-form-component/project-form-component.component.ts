import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProjectService} from '../../services/project.service';
import {Router} from '@angular/router';
import {Project} from '../../Models/project.models';

@Component({
  selector: 'app-project-form-component',
  templateUrl: './project-form-component.component.html',
  styleUrls: ['./project-form-component.component.css']
})
export class ProjectFormComponentComponent implements OnInit {

  projectForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.projectForm = this.formBuilder.group(
      {
        nom: '',
        dateFin: new Date(),
        Impact: '',
        Desc: ''
      }
    );
  }

  onSaveProject () {
    const nom = this.projectForm.get('nom').value ;
    const dateF = this.projectForm.get('dateFin').value ;
    const impact = this.projectForm.get('Impact').value;
    const desc = this.projectForm.get('Desc').value;
    const projet = new Project('', nom, dateF, impact, desc);
    this.projectService.createProject(projet);
    this.router.navigate(['projects/project-list']);
  }


}
