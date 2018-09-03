import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import { BrowserModule } from '@angular/platform-browser';
import {AgmCoreModule} from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'flatpickr/dist/flatpickr.css';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap/';
import { FlatpickrModule } from 'angularx-flatpickr';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import { SingupComponent } from './auth/singup/singup.component';
import { SinginComponent } from './auth/singin/singin.component';
import { ProjectCompComponent } from './project/project-comp/project-comp.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CalendarComponent } from './gestion-projet/calendar/calendar.component';
import { JalonComponent } from './gestion-projet/jalon/jalon.component';
import { AddJalonComponent } from './gestion-projet/add-jalon/add-jalon.component';
import { OutcomesComponent } from './planif/outcomes/outcomes.component';
import { AddOutcomeComponent } from './planif/add-outcome/add-outcome.component';
import { OutputsComponent } from './planif/outputs/outputs.component';
import { AddOutputComponent } from './planif/add-output/add-output.component';
import { ActivitiesComponent } from './planif/activities/activities.component';
import { AddActivityComponent } from './planif/add-activity/add-activity.component';
import { AddIndicatorComponent } from './planif/add-indicator/add-indicator.component';
import { PreviewComponent } from './planif/preview/preview.component';
import { RessourcesComponent } from './G-res/ressources/ressources.component';
import { AddRessourceComponent } from './G-res/add-ressource/add-ressource.component';
import { GestionTachesComponent } from './G-task/gestion-taches/gestion-taches.component';
import { AddTaskComponent } from './G-task/add-task/add-task.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ActivitiesService} from './services/activities.service';
import {AuthService} from './services/auth.service';
import {GRessourcesService} from './services/g-ressources.service';
import {GestionProjetService} from './services/gestion-projet.service';
import {OutcomesService} from './services/outcomes.service';
import {OutputsService} from './services/outputs.service';
import {ProjectService} from './services/project.service';
import {TasksService} from './services/tasks.service';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from './services/authguard.service';
import { ProjectListComponentComponent } from './project/project-list-component/project-list-component.component';
import { ProjectFormComponentComponent } from './project/project-form-component/project-form-component.component';
import { AuthentifComponent } from './authentif/authentif.component';
import { FooterComponent } from './footer/footer.component';



const appRoutes: Routes = [
  { path: 'auth/signup', component: SingupComponent },
  { path: 'auth/signin', component: SinginComponent },
  { path: 'navBar', canActivate: [AuthGuardService], component: NavigationBarComponent },
  { path: 'gRes/ressources', canActivate: [AuthGuardService], component: RessourcesComponent },
  { path: 'gRes/ressources/addRessource', canActivate: [AuthGuardService], component: AddRessourceComponent },
  { path: 'gTask/gestionTask', canActivate: [AuthGuardService], component: GestionTachesComponent },
  { path: 'gTask/gestionTask/addTask', canActivate: [AuthGuardService], component: AddTaskComponent },
  { path: 'gProjet/calendar', canActivate: [AuthGuardService], component: CalendarComponent },
  { path: 'gProjet/jalon', canActivate: [AuthGuardService], component: JalonComponent },
  { path: 'gProjet/jalon/addJalon', canActivate: [AuthGuardService], component: AddJalonComponent },
  { path: 'planif/activities', canActivate: [AuthGuardService], component: ActivitiesComponent },
  { path: 'planif/activities/addActivity', canActivate: [AuthGuardService], component: AddActivityComponent },
  { path: 'planif/activities/addIndicator', canActivate: [AuthGuardService], component: AddIndicatorComponent },
  { path: 'planif/preview', canActivate: [AuthGuardService], component: PreviewComponent },
  { path: 'planif/outcomes', canActivate: [AuthGuardService], component: OutcomesComponent },
  { path: 'planif/outcomes/addOutcome', canActivate: [AuthGuardService], component: AddOutcomeComponent },
  { path: 'planif/output', canActivate: [AuthGuardService], component: OutputsComponent },
  { path: 'planif/output/addOutput', canActivate: [AuthGuardService], component: AddOutputComponent },
  {path: 'projects/project-list', canActivate: [AuthGuardService], component: ProjectListComponentComponent },
  {path: 'projects/project-form', canActivate: [AuthGuardService], component: ProjectFormComponentComponent},
  {path: 'projects/project', canActivate: [AuthGuardService], component: ProjectCompComponent},
  { path: '', redirectTo: 'planif/preview', pathMatch: 'full' },
  { path: '**', redirectTo: 'planif/preview' }
];


@NgModule({
  declarations: [
    AppComponent,
    SingupComponent,
    SinginComponent,
    ProjectCompComponent,
    AddProjectComponent,
    NavigationBarComponent,
    CalendarComponent,
    JalonComponent,
    AddJalonComponent,
    OutcomesComponent,
    AddOutcomeComponent,
    OutputsComponent,
    AddOutputComponent,
    ActivitiesComponent,
    AddActivityComponent,
    AddIndicatorComponent,
    PreviewComponent,
    RessourcesComponent,
    AddRessourceComponent,
    GestionTachesComponent,
    AddTaskComponent,
    ProjectListComponentComponent,
    ProjectFormComponentComponent,
    AuthentifComponent,
    FooterComponent,
  ],

 imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(appRoutes), BsDropdownModule.forRoot(), CommonModule,
    NgbModalModule.forRoot(), FlatpickrModule.forRoot(), CalendarModule.forRoot(), AgmCoreModule.forRoot({
     apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
   })],

  providers: [ActivitiesService, AuthService, GRessourcesService, GestionProjetService, OutcomesService, OutputsService,
              ProjectService, TasksService, AuthGuardService],

  bootstrap: [AppComponent],
  exports: [AppComponent]

})
export class AppModule { }
