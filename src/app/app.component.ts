import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      // For other projects use different keys
      apiKey: "AIzaSyBbLtapmA7Li32ccmgjDSThSJ-wKf-Wk4Y",
      authDomain: "angularstreaming.firebaseapp.com",
      databaseURL: "https://angularstreaming.firebaseio.com",
      projectId: "angularstreaming",
      storageBucket: "",
      messagingSenderId: "420594823747"
    });
  }
}
