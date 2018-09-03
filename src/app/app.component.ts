import { Component } from '@angular/core';
import DataSnapshot = firebase.database.DataSnapshot;
import {Project} from './Models/project.models';
import {post} from 'selenium-webdriver/http';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BusinessWise';
  constructor() {
    const config = {
      apiKey: 'AIzaSyBi9eV9yWerWvGeBFtELp8VYFwqm_D88sw',
      authDomain: 'businesswise-1b382.firebaseapp.com',
      databaseURL: 'https://businesswise-1b382.firebaseio.com',
      projectId: 'businesswise-1b382',
      storageBucket: 'businesswise-1b382.appspot.com',
      messagingSenderId: '864025906063'
    };
    firebase.initializeApp(config);
  }


}
